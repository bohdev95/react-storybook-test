import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { prefSlice } from "./prefSlice";
const persistConfig = {
  key: 'prefrence',
  storage,
  whitelist: ['savedData', 'items'] //add the slice you want to persist
}

const persistedReducer = persistReducer(persistConfig, prefSlice.reducer)

const store = configureStore({
  reducer: {
    prefrence: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: process.env.NODE_ENV !== "production",
});

setupListeners(store.dispatch);
export const persistor = persistStore(store)

export default store;
