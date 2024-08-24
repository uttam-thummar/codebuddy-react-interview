import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const Stepper = ({ currentFormStep, setCurrentFormStep }) => {
  const { formDetails } = useSelector((store) => store.form);

  const handleJumpToStep = (step) => {
    switch (step) {
      case 1:
        setCurrentFormStep(step);
        break;
      case 2:
        if (formDetails.email && formDetails.password) {
          setCurrentFormStep(step);
        }
        break;
      case 3:
        if (formDetails.firstname && formDetails.address) {
          setCurrentFormStep(step);
        }
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="mx-auto my-8 flex w-full max-w-lg items-center justify-between">
        {["Step 1", "Step 2", "Step 3"].map((step, index) => (
          <div key={index} className="flex flex-1 items-center">
            <div className="relative flex w-full flex-col items-center">
              <div
                onClick={() => handleJumpToStep(index + 1)}
                className={`z-10 flex h-10 w-10 items-center justify-center rounded-full font-semibold text-white ${
                  currentFormStep >= index + 1 ? "bg-teal-500" : "bg-gray-300"
                } select-none transition duration-300 ease-in-out`}
              >
                {index + 1}
              </div>
              <div className="mt-2 text-center text-sm text-gray-700">{step}</div>
              {index < 2 && (
                <div
                  className={`absolute left-1/2 top-5 h-1 w-full bg-${
                    currentFormStep > index + 1 ? "teal-500" : "gray-300"
                  } transition duration-300 ease-in-out`}
                ></div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

Stepper.propTypes = {
  currentFormStep: PropTypes.number.isRequired,
  setCurrentFormStep: PropTypes.func.isRequired,
};

export default Stepper;
