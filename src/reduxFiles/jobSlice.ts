import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface JobState {
  jobsData: any[];
  filteredJobs: any[];
  hasMore: boolean;
  offset: number;
}

const initialState: JobState = {
  jobsData: [],
  filteredJobs: [],
  hasMore: true,
  offset: 0,
};

export const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    setJobsData: (state, action: PayloadAction<any[]>) => {
      state.jobsData = action.payload;
    },
    setFilteredJobs: (state, action: PayloadAction<any[]>) => {
      state.filteredJobs = action.payload;
    },
    setHasMore: (state, action: PayloadAction<boolean>) => {
      state.hasMore = action.payload;
    },
    setOffset: (state, action: PayloadAction<number>) => {
      state.offset = action.payload;
    },
  },
});

export const { setJobsData, setFilteredJobs, setHasMore, setOffset } =
  jobSlice.actions;

export const selectJobs = (state: RootState) => state.job;

export default jobSlice.reducer;
