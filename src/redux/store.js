import { createStore, applyMiddleware } from "redux"
import logger from "redux-logger"
import rootReducer from "./root-reducer"
import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage"
import thunk from "redux-thunk"

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["cartItems"],
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const middlewares = [logger, thunk]

export const store = createStore(
	persistedReducer,
	applyMiddleware(...middlewares)
)
export const persistor = persistStore(store)
