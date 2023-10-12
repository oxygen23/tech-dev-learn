import {
	Action,
	AnyAction,
	ThunkAction,
	ThunkDispatch,
	combineReducers,
	configureStore,
} from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { Context } from "vm";
import allCourses from "./slices/allCourses";
import favoritesCourses from "./slices/favoritesCourses";
import popularAuthors from "./slices/popularAuthors";
import unfinishedCourses from "./slices/unfinishedCourses";

const rootReducer = combineReducers({
	allCourses: allCourses,
	favoritesCourses: favoritesCourses,
	popularAuthors: popularAuthors,
	unfinishedCourses: unfinishedCourses,
});

const makeStore = (context: Context) => {
	return configureStore({
		reducer: rootReducer,
		devTools: true,
	});
};

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	AppState,
	unknown,
	Action
>;
export type AppThunkDispatch = ThunkDispatch<AppState, void, AnyAction>;

export const wrapper = createWrapper<AppStore>(makeStore);

export const useWrappedStore = (appProps: NonNullable<unknown>) => {
	const { store, props } = wrapper.useWrappedStore(appProps);
	const { pageProps } = props as { pageProps: NonNullable<unknown> };

	return { pageProps, store };
};
