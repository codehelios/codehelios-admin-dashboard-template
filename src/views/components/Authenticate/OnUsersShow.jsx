import React from 'react';
import { useSelector } from 'react-redux';
import SplashScreen from '../SplashScreen';

export function OnUsersShow({ children, users, otherwise }) {
	const { auth, firebaseAuth } = useSelector((state) => {
		return {
			auth: state.auth,
			firebaseAuth: state.firebase.auth,
		};
	});
	if (auth.user !== null && users.includes(auth.user.role)) {
		return children;
	} else if (firebaseAuth.isLoaded && auth.user === null) {
		return <SplashScreen />;
	} else {
		return otherwise !== undefined ? otherwise : null;
	}
}
