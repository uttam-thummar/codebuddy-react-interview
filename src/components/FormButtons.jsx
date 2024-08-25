import PropTypes from "prop-types";

const FormButtons = ({ currentFormStep, handleBack, handleSave, handleSaveAndNext }) => {
  return (
    <>
      <div>
        <div className="mt-8 flex justify-between gap-8">
          <div className="w-1/3">
            <button
              type="button"
              disabled={currentFormStep === 1}
              onClick={handleBack}
              className="w-full rounded-lg border border-solid border-gray-300 bg-white py-3 text-sm font-semibold text-gray-700 transition duration-300 hover:bg-gray-300 disabled:opacity-50 disabled:hover:bg-white sm:text-base"
            >
              Back
            </button>
          </div>
          <div className="flex flex-1 flex-col items-end gap-1 sm:flex-row">
            <button
              type="button"
              onClick={handleSave}
              className="w-full max-w-[200px] rounded-lg border border-solid border-transparent bg-teal-500 py-3 text-sm font-semibold text-white shadow-md transition duration-300 hover:bg-teal-600 sm:text-base"
            >
              {currentFormStep === 3 ? "Submit" : "Save"}
            </button>
            <button
              type="button"
              disabled={currentFormStep === 3}
              onClick={handleSaveAndNext}
              className="w-full max-w-[200px] rounded-lg border border-solid border-transparent bg-indigo-500 py-3 text-sm font-semibold text-white shadow-md transition duration-300 hover:bg-indigo-600 disabled:opacity-50 disabled:hover:bg-indigo-500 sm:text-base"
            >
              Save & Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

FormButtons.propTypes = {
  currentFormStep: PropTypes.number.isRequired,
  handleBack: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
  handleSaveAndNext: PropTypes.func.isRequired,
};

export default FormButtons;
