import React from "react"
import reactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from "react-redux"

import { store, persistor } from "./redux/store"
import { PersistGate } from "redux-persist/integration/react"

import App from "./App"
import "./app.scss"

reactDOM.render(
    <Provider store={store}>
        <Router>
            <PersistGate persistor={persistor}>
                <App />
            </PersistGate>
        </Router>
    </Provider>,
    document.getElementById("root")
)
