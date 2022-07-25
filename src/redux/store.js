import { legacy_createStore as createStore } from 'redux'
import rootReducer from './reducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const composedEnhancers = composeWithDevTools();
const store = createStore(rootReducer, composedEnhancers)

export default store;

// import { confiugreStore } from '@reduxjs/toolkit';

// const store = confiugreStore({
//     reducer: {

//     }
// })