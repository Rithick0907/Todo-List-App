import { createSlice } from "@reduxjs/toolkit";

const tasks = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTasks: (state, action) => {},
    updateTasks: (state, action) => {},
  },
});

export const { addTasks, updateTasks } = tasks.actions;
export default tasks.reducer;
