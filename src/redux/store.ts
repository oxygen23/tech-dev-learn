import {
  Action,
  AnyAction,
  ThunkAction,
  ThunkDispatch,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import favoritesCourses from './slices/favoritesCourses';

const rootReducer = combineReducers({
  favoritesCourses,
});

const makeStore = () => configureStore({
  devTools: true,
  reducer: rootReducer,
});

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
AppState,
unknown,
Action
>;
export type AppThunkDispatch = ThunkDispatch<AppState, void, AnyAction>;

export const wrapper = createWrapper<AppStore>(makeStore);

export const useWrappedStore = (appProps: NonNullable<unknown>) => {
  // eslint-disable-next-line
  const { store, props } = wrapper.useWrappedStore(appProps);
  const { pageProps } = props as { pageProps: NonNullable<unknown> };

  return { pageProps, store };
};
