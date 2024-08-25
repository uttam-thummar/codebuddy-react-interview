import PropTypes from "prop-types";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import FormButtons from "./FormButtons";

const Form2 = ({ currentFormStep, handleBack, handleSave, handleSaveAndNext }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const { formDetails } = useSelector((store) => store.form);

  const handleClickSave = () => {
    handleSubmit(handleSave)();
  };

  const handleClickSaveAndNext = () => {
    handleSubmit(handleSaveAndNext)();
  };

  useEffect(() => {
    setValue("firstname", formDetails.firstname);
    setValue("lastname", formDetails.lastname);
    setValue("address", formDetails.address);

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <form className="space-y-2">
        <div>
          <h6 className="mb-1 p-1 font-medium">First Name</h6>
          <input
            type="text"
            id="firstname"
            name="firstname"
            placeholder="Enter your first name"
            {...register("firstname", {
              required: "First Name is required.",
              pattern: {
                value: /^[A-Za-z]+$/,
                message: "First Name must contain only letters.",
              },
              minLength: {
                value: 2,
                message: "First Name must be at least 2 characters.",
              },
              maxLength: {
                value: 50,
                message: "First Name cannot exceed 50 characters.",
              },
            })}
            className="w-full rounded-lg border border-gray-300 py-3 pl-6 pr-4 transition duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          {errors.firstname?.message && (
            <div className="font-medium text-red-700">
              <small>{errors.firstname?.message}</small>
            </div>
          )}
        </div>
        <div>
          <h6 className="mb-1 p-1 font-medium">Last Name</h6>
          <input
            type="text"
            id="lastname"
            name="lastname"
            placeholder="Enter your last name"
            {...register("lastname", {
              pattern: {
                value: /^[A-Za-z]*$/,
                message: "Last Name can only contain letters.",
              },
            })}
            className="w-full rounded-lg border border-gray-300 py-3 pl-6 pr-10 transition duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          {errors.lastname?.message && (
            <div className="font-medium text-red-700">
              <small>{errors.lastname?.message}</small>
            </div>
          )}
        </div>
        <div>
          <h6 className="mb-1 p-1 font-medium">Address</h6>
          <textarea
            id="address"
            name="address"
            placeholder="Enter your address"
            rows={3}
            {...register("address", {
              required: "Address is required.",
              minLength: {
                value: 10,
                message: "Address must be at least 10 characters.",
              },
            })}
            className="w-full rounded-lg border border-gray-300 py-3 pl-6 pr-10 transition duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
          ></textarea>
          {errors.address?.message && (
            <div className="font-medium text-red-700">
              <small>{errors.address?.message}</small>
            </div>
          )}
        </div>
        <FormButtons
          currentFormStep={currentFormStep}
          handleBack={handleBack}
          handleSave={handleClickSave}
          handleSaveAndNext={handleClickSaveAndNext}
        />
      </form>
    </>
  );
};

Form2.propTypes = {
  currentFormStep: PropTypes.number.isRequired,
  handleBack: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
  handleSaveAndNext: PropTypes.func.isRequired,
};

export default Form2;
