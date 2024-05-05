import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    profile: {
      firstName: "",
      lastName: "",
      currentSalaryFixed: 0,
      currentSalaryVariable: 0,
      currentSalaryStocks: 0,
      expectedSalary: 0,
      jobSwitchLikelihood: "Not looking",
      noticePeriod: "Immediate joining",
      email: "",
      whatsappNumber: "",
      resume: null,
    },
  },
  reducers: {
    updateProfile: (state, action) => {
      state.profile = { ...state.profile, ...action.payload };
    },
    clearProfile: (state) => {
      state.profile = initialState.profile;
    },
  },
});

export const { updateProfile, clearProfile } = userSlice.actions;

export default userSlice.reducer;
