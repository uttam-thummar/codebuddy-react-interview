import { combineReducers, configureStore } from "@reduxjs/toolkit";
import formSlice from "./reducers/form/formSlice";

const rootReducer = combineReducers({
  form: formSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
