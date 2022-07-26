// import { legacy_createStore as createStore } from 'redux'
// import rootReducer from './reducer'
// import { composeWithDevTools } from 'redux-devtools-extension'

// const composedEnhancers = composeWithDevTools();
// const store = createStore(rootReducer, composedEnhancers)

import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducer";

const store = configureStore({
    reducer: {
        user: userSlice,
    },
});

export default store;