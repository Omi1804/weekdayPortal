import { createSlice } from "@reduxjs/toolkit";

interface Profile {
  firstName: string;
  lastName: string;
  currentSalaryFixed: number;
  currentSalaryVariable: number;
  currentSalaryStocks: number;
  expectedSalary: number;
  jobSwitchLikelihood: "Actively looking" | "Open to offers" | "Not looking";
  noticePeriod: "Immediate joining" | "1 month" | "2 months" | "3 months";
  email: string;
  whatsappNumber: string;
  resume: File | null;
}

interface UserState {
  profile: Profile;
}

// Initial state of the user slice
const initialState: UserState = {
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
};

export const userSlice = createSlice({
  name: "user",
  initialState,
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
