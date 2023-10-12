import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "@/axios";
import { AppState } from "@/redux/store";
import { RootUser } from "@/types/User";
import { AxiosResponse } from "axios";

interface UnfinishedCoursesState {
	user: RootUser;
	status: "loading" | "success" | "error";
}

const initialState: UnfinishedCoursesState = {
	user: {
		id: 0,
		name: "",
		last_name: "",
		count_courses: 0,
		likes: 0,
		dislikes: 0,
		courses_started: [],
	},
	status: "loading",
};

const unfinishedCoursesSlice = createSlice({
	name: "unfinishedCourses",
	initialState,
	reducers: {},
});

export const selectUnfinishedCourses = (state: AppState) =>
	state.unfinishedCourses;

export default unfinishedCoursesSlice.reducer;
