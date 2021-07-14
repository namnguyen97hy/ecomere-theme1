// import { createStore, applyMiddleware, compose } from "redux";
// import createSagaMiddleware from "redux-saga";
// import reducers from "./reducers";
// import sagas from "./sagas";


// const sagaMiddleware = createSagaMiddleware();
// const middlewares = [sagaMiddleware];

// export function configureStore(initialState) {
//   const composeEnhancers =
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//   const store = createStore(
//     reducers,
//     initialState,
//     composeEnhancers(applyMiddleware(...middlewares))
//   );

//   sagaMiddleware.run(sagas);
//   return store;
// }

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
const store = configureStore({ reducer: rootReducer });
export default store


