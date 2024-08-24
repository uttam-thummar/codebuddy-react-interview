import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { submitFormDetailsThunk } from "./formThunk";
import { toast } from "react-toastify";

const initialState = {
  loading: false,
  formDetails: {
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    address: "",
    countryCode: "",
    phoneNumber: "",
    termsAndConditions: false,
  },
};

export const submitFormDetails = createAsyncThunk("submit/form-details", submitFormDetailsThunk);

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setFormDetails: (state, action) => {
      state.formDetails = {
        ...state.formDetails,
        ...action.payload,
      };
    },
    resetFormDetails: (state) => {
      state.formDetails = initialState.formDetails;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitFormDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(submitFormDetails.fulfilled, (state, { payload }) => {
        state.loading = false;
        toast.success(payload);
      })
      .addCase(submitFormDetails.rejected, (state, { payload }) => {
        state.loading = false;
        toast.error(payload);
      });
  },
});

export const { setFormDetails, resetFormDetails } = formSlice.actions;
export default formSlice.reducer;
