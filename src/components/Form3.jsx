import PropTypes from "prop-types";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import FormButtons from "./FormButtons";
import { setFormDetails } from "../redux/reducers/form/formSlice";

const Form3 = ({ currentFormStep, handleBack, handleSave }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const { formDetails } = useSelector((store) => store.form);

  const handleClickBack = () => {
    handleSubmit((data) => {
      dispatch(setFormDetails(data));
    })();
    handleBack();
  };

  const handleClickSave = () => {
    handleSubmit(handleSave)();
  };

  useEffect(() => {
    setValue("countryCode", formDetails.countryCode);
    setValue("phoneNumber", formDetails.phoneNumber);
    setValue("termsAndConditions", formDetails.termsAndConditions);

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <form className="space-y-4">
        <div className="flex flex-col gap-2 sm:flex-row">
          <div className="relative">
            <h6 className="mb-1 p-1 font-medium">Country Code</h6>
            <select
              id="countryCode"
              name="countryCode"
              {...register("countryCode", {
                required: "Country code is required.",
                validate: (value) => ["+91", "+1"].includes(value) || "Invalid country code.",
              })}
              className="h-[50px] w-full rounded-lg border border-gray-300 bg-white px-4 py-3 pr-10 text-gray-700 placeholder-gray-500 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="">Select</option>
              {["+91", "+1"].map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.countryCode?.message && (
              <div className="font-medium text-red-700">
                <small>{errors.countryCode?.message}</small>
              </div>
            )}
          </div>
          <div className="flex-1">
            <h6 className="mb-1 p-1 font-medium">Phone Number</h6>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Enter your phone number"
              {...register("phoneNumber", {
                required: "Phone number is required.",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Phone number must be 10 digits",
                },
              })}
              className="w-full rounded-lg border border-gray-300 py-3 pl-6 pr-4 transition duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            {errors.phoneNumber?.message && (
              <div className="font-medium text-red-700">
                <small>{errors.phoneNumber?.message}</small>
              </div>
            )}
          </div>
        </div>
        <div>
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              id="termsAndConditions"
              name="termsAndConditions"
              {...register("termsAndConditions", {
                required: "You must accept the terms and conditions.",
              })}
              className="h-4 w-4 rounded border-gray-300 text-teal-500 focus:ring-teal-500"
            />
            <label htmlFor="termsAndConditions" className="text-sm text-gray-700">
              I agree to the Terms and Conditions.
            </label>
          </div>
          {errors.termsAndConditions?.message && (
            <div className="font-medium text-red-700">
              <small>{errors.termsAndConditions?.message}</small>
            </div>
          )}
        </div>
        <FormButtons
          currentFormStep={currentFormStep}
          handleBack={handleClickBack}
          handleSave={handleClickSave}
          handleSaveAndNext={() => {}}
        />
      </form>
    </>
  );
};

Form3.propTypes = {
  currentFormStep: PropTypes.number.isRequired,
  handleBack: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
};

export default Form3;
