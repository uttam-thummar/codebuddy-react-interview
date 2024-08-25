import { combineReducers, configureStore } from "@reduxjs/toolkit";
import formSlice from "./reducers/form/formSlice";
import postSlice from "./reducers/post/postSlice";

const rootReducer = combineReducers({
  form: formSlice,
  post: postSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
