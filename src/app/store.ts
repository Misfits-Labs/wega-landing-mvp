import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import intlReducer from '../containers/LanguageProvider/intlSlice'
export const store = configureStore({
  reducer: {
    language: intlReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,RootState,unknown,Action<string>>;
