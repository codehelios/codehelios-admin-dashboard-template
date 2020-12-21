import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core';

import UserProfile from './UserProfile';
import { openTab, logout } from '../../../state/ducks/app/actions';
import routes from '../../routes/routes';
import styles from './styles';

class UserProfileContainer extends Component {
	constructor(props) {
		super(props);
		if (props.currentTab !== routes.nav.dashboard) {
			props.openTab(routes.nav.dashboard);
		}
	}

	render() {
		if (this.props.currentTab !== routes.nav.dashboard) {
			return null;
		} else {
			return <UserProfile {...this.props} />;
		}
	}
}

const mapStateToProps = (state) => {
	return {
		currentTab: state.currentTab,
		auth: state.auth,
		firebaseAuth: state.firebase.auth,
	};
};

export default compose(
	connect(mapStateToProps, { openTab, logout }),
	withStyles(styles)
)(UserProfileContainer);
