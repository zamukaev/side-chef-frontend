import { combineReducers } from "@reduxjs/toolkit";

import { modalSlice } from "entities/modals";

export const rootReducer = combineReducers({
  [modalSlice.name]: modalSlice.reducer,
});
