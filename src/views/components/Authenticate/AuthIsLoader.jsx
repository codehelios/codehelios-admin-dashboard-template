import React from 'react';
import { useSelector } from 'react-redux';
import { isLoaded } from 'react-redux-firebase';

import SplashScreen from '../SplashScreen';
import { Login } from '../../pages';
import UserCheck from './UserCheck';

export function AuthIsLoaded({ children }) {
	const auth = useSelector((state) => {
		return state.firebase.auth;
	});
	if (!isLoaded(auth) || !auth.isLoaded) {
		return <SplashScreen />;
	} else if (auth.isEmpty) {
		return <Login />;
	}
	return <UserCheck uid={auth.uid}>{children}</UserCheck>;
}
