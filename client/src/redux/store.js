import { createStore, applyMiddleware } from "redux"
import logger from "redux-logger"
import rootReducer from "./root-reducer"
import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage"
import createSagaMiddleware from "redux-saga"
import rootSaga from "./saga/sagas"

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["cartItems"],
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const sagaMiddleware = createSagaMiddleware()
const middlewares = [logger, sagaMiddleware]

export const store = createStore(
	persistedReducer,
	applyMiddleware(...middlewares)
)
sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)
