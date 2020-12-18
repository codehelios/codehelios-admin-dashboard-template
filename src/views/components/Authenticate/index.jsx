import React from "react";
import { useSelector } from "react-redux";
import { isLoaded, useFirestoreConnect } from "react-redux-firebase";
import loadable from "@loadable/component";

const SplashScreen = loadable(() => import("../SplashScreen"));
const Login = loadable(() => import("views/pages/Login"));

export default function Authenticate({ children }) {
  useFirestoreConnect([{ collection: "admins" }]);
  const { auth, admins } = useSelector((state) => {
    return {
      auth: state.firebase.auth,
      admins: state.firestore.data.admins,
    };
  });
  if (!isLoaded(auth) || !auth.isLoaded || !admins) {
    return <SplashScreen />;
  } else if (auth.isEmpty) {
    return <Login />;
  } else {
    if (!admins[auth.uid]) {
      return <Login />;
    }
  }
  return children;
}
