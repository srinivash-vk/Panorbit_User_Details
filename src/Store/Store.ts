import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';
import { combineReducers } from 'redux';
import { encryptTransform } from "redux-persist-transform-encrypt";
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AllApi } from "../Services/AllApi";
import { UserApi } from "../Services/UserApi";
import UserReducer from "../Reducer/UserReducer";

const reducers = combineReducers({
    [AllApi.reducerPath]: AllApi.reducer,
    [UserApi.reducerPath]: UserApi.reducer,
    user: UserReducer,
})

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    transforms: [
        encryptTransform({
            secretKey: 'my-secret-key',
            onError: function (error) { },
        }),
    ],
}

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => {
        const middlewares = getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })
            .concat(AllApi.middleware)
            .concat(UserApi.middleware);

        return middlewares;
    },
})

const persistor = persistStore(store);
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export { store, persistor };