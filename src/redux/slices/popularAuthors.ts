import { RootAuthor } from "@/types/Author";
import { RootCourse } from "@/types/Course";
import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../store";
interface PopularAuthorsState {
	authors: RootAuthor[];
	author_courses: RootCourse[];
	status: "loading" | "success" | "error";
}

const initialState: PopularAuthorsState = {
	authors: [],
	author_courses: [],
	status: "loading",
};

const popularAuthorsSlice = createSlice({
	name: "popularAuthors",
	initialState,
	reducers: {},
});

export const selectPopularAuthors = (state: AppState) => state.popularAuthors;

export default popularAuthorsSlice.reducer;
