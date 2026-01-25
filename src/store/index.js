import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./projectSlice";
const Store = configureStore({
  reducer: {
    projects: projectReducer,
  },
});
export default Store;
