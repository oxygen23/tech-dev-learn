import { RootCourse } from "@/types/Course";
import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../store";

interface AllCoursesState {
	courses: RootCourse[];
	status: "loading" | "success" | "error";
}

const initialState: AllCoursesState = {
	courses: [],
	status: "loading",
};

const AllCourses = createSlice({
	name: "AllCourses",
	initialState,
	reducers: {}
});

export const selectAllCourses = (state: AppState) => state.allCourses;

export default AllCourses.reducer;
