import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { getFirebase, firebaseReducer } from "react-redux-firebase";
import {
  getFirestore,
  firestoreReducer,
  reduxFirestore,
} from "redux-firestore";
import { reducer as formReducer } from "redux-form";

import { ducks } from "./ducks";
import firebase from "config/firebase";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  combineReducers({
    ...ducks,
    form: formReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
  }),
  composeEnhancers(
    applyMiddleware(
      thunkMiddleware.withExtraArgument({ getFirebase, getFirestore })
    ),
    reduxFirestore(firebase)
  )
);

export default store;
