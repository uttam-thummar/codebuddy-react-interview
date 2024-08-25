import { useState } from "react";
import Form1 from "../components/Form1";
import Form2 from "../components/Form2";
import Form3 from "../components/Form3";
import Stepper from "../components/Stepper";
import Loader from "../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { setFormDetails, submitFormDetails } from "../redux/reducers/form/formSlice";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, formDetails } = useSelector((store) => store.form);
  const navigate = useNavigate();

  const [currentFormStep, setCurrentFormStep] = useState(1);

  const handleBack = () => {
    setCurrentFormStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSave = (data) => {
    dispatch(setFormDetails(data));

    if (currentFormStep === 3) {
      dispatch(
        submitFormDetails({
          emailId: formDetails.email,
          password: formDetails.password,
          firstName: formDetails.firstname,
          lastName: formDetails.lastname,
          address: formDetails.address,
          countryCode: data.countryCode,
          phoneNumber: data.phoneNumber,
        }),
      ).then((response) => {
        if (response.type === "submit/form-details/fulfilled") {
          navigate("/posts");
        }
      });
    }
  };

  const handleSaveAndNext = (data) => {
    handleSave(data);
    setCurrentFormStep((prev) => Math.min(prev + 1, 3));
  };

  const CurrentStepForm = () => {
    switch (currentFormStep) {
      case 1:
        return (
          <Form1
            currentFormStep={currentFormStep}
            handleSave={handleSave}
            handleSaveAndNext={handleSaveAndNext}
          />
        );
      case 2:
        return (
          <Form2
            currentFormStep={currentFormStep}
            handleBack={handleBack}
            handleSave={handleSave}
            handleSaveAndNext={handleSaveAndNext}
          />
        );
      case 3:
        return (
          <Form3
            currentFormStep={currentFormStep}
            handleBack={handleBack}
            handleSave={handleSave}
          />
        );
      default:
        return <></>;
    }
  };

  return (
    <div className="mx-2 flex min-h-[calc(100vh_-_56px)] justify-center text-gray-900">
      <Loader loading={loading} className="h-full">
        <div className="h-max w-full transform rounded-2xl bg-gray-50 p-8 sm:max-w-[480px]">
          <h1 className="mb-3 text-center text-2xl font-bold text-gray-800 sm:text-3xl">
            Please fill the form
          </h1>
          <p className="mb-8 text-center text-sm text-gray-600">
            We value your feedback and input. Please complete the form below.
          </p>

          <Stepper currentFormStep={currentFormStep} setCurrentFormStep={setCurrentFormStep} />

          <CurrentStepForm />
        </div>
      </Loader>
    </div>
  );
};

export default Home;
