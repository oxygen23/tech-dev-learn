import { RootCourse } from "@/types/Course";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppState } from "../store";

interface FavoriteState {
	favorites: RootCourse[]
}

const initialState: FavoriteState = {
	favorites: [],
};

const FavoritesCourses = createSlice({
	name: "FavoritesCourses",
	initialState,
	reducers: {
		changeFavorite: (state, action: PayloadAction<RootCourse>) => {
			const isFavorite = state.favorites.some(
				(favoriteItem) => favoriteItem.id === action.payload.id
			);
			if (isFavorite) {
				state.favorites = state.favorites.filter(
					(item) => item.id !== action.payload.id
				);
			} else {
				state.favorites.push(action.payload);
			}
		},
	},
});

export const selectFavorites = (state: AppState) => state.favoritesCourses;

export const { changeFavorite } = FavoritesCourses.actions;

export default FavoritesCourses.reducer;
