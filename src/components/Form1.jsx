import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

const Form1 = ({ handleSave, handleSaveAndNext }) => {
  const emailRegx = /^([a-z0-9.-]+)@([a-z0-9-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
  const passwordRegex =
    /^(?=(?:.*[A-Z]){2})(?=(?:.*[a-z]){2})(?=(?:.*[0-9]){2})(?=(?:.*[!@#$%^&*(),.?":{}|<>]){2}).{8,}$/;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const { formDetails } = useSelector((store) => store.form);

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const handleClickSave = () => {
    handleSubmit(handleSave)();
  };

  const handleClickSaveAndNext = () => {
    handleSubmit(handleSaveAndNext)();
  };

  useEffect(() => {
    setValue("email", formDetails.email);
    setValue("password", formDetails.password);

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <form className="space-y-2">
        <div className="relative">
          <h6 className="mb-1 p-1 font-medium">Email</h6>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your Email"
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: emailRegx,
                message: "Enter valid email.",
              },
            })}
            className="w-full rounded-lg border border-gray-300 py-3 pl-6 pr-4 transition duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          {errors.email?.message && (
            <div className="font-medium text-red-700">
              <small>{errors.email?.message}</small>
            </div>
          )}
          <div className="absolute right-3 top-12 cursor-pointer text-gray-400">
            <Icon icon="basil:envelope-outline" className="text-[30px]" />
          </div>
        </div>
        <div className="relative">
          <h6 className="mb-1 p-1 font-medium">Password</h6>
          <input
            type={passwordVisible ? "text" : "password"}
            id="password"
            name="password"
            placeholder="Enter your Password"
            {...register("password", {
              required: "Password is required.",
              pattern: {
                value: passwordRegex,
                message:
                  "Password must be at least 8 characters long and include at least 2 uppercase letters, 2 lowercase letters, 2 numbers, and 2 special characters.",
              },
            })}
            className="w-full rounded-lg border border-gray-300 py-3 pl-6 pr-10 transition duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          {errors.password?.message && (
            <div className="font-medium text-red-700">
              <small>{errors.password?.message}</small>
            </div>
          )}
          <div
            className="absolute right-3 top-12 cursor-pointer text-gray-400"
            onClick={togglePasswordVisibility}
          >
            {passwordVisible ? (
              <Icon icon="pepicons-pencil:eye-off" className="text-[30px]" />
            ) : (
              <Icon icon="pepicons-pencil:eye" className="text-[30px]" />
            )}
          </div>
        </div>
        <div>
          <div className="mt-8 flex justify-between gap-8">
            <div className="w-1/3">
              <button
                type="button"
                disabled
                className="w-full rounded-lg border border-solid border-gray-300 bg-white py-3 text-sm font-semibold text-gray-700 transition duration-300 hover:bg-gray-300 disabled:opacity-50 disabled:hover:bg-white sm:text-base"
              >
                Back
              </button>
            </div>
            <div className="flex flex-1 flex-col items-end gap-1 sm:flex-row">
              <button
                type="button"
                onClick={handleClickSave}
                className="w-full max-w-[200px] rounded-lg border border-solid border-transparent bg-teal-500 py-3 text-sm font-semibold text-white shadow-md transition duration-300 hover:bg-teal-600 sm:text-base"
              >
                Save
              </button>
              <button
                type="button"
                onClick={handleClickSaveAndNext}
                className="w-full max-w-[200px] rounded-lg border border-solid border-transparent bg-indigo-500 py-3 text-sm font-semibold text-white shadow-md transition duration-300 hover:bg-indigo-600 sm:text-base"
              >
                Save & Next
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

Form1.propTypes = {
  handleSave: PropTypes.func.isRequired,
  handleSaveAndNext: PropTypes.func.isRequired,
};

export default Form1;
