import { resetFormDetails } from "./formSlice";

export const submitFormDetailsThunk = async (params, thunkAPI) => {
  try {
    const endpoint = "https://codebuddy.review/submit";

    const response = await fetch(endpoint, {
      method: "POST",
      body: JSON.stringify(params),
    });
    if (!response.ok) {
      return thunkAPI.rejectWithValue("Something went wrong, please try again later.");
    }

    const responseResult = await response.json();
    if (responseResult.message === "Success") {
      thunkAPI.dispatch(resetFormDetails());
      return "Form submitted successfully.";
    } else {
      return thunkAPI.rejectWithValue("Something went wrong, please try again later.");
    }
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
};
