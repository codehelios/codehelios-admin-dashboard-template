import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { mobileMenuHandle, logout } from 'state/ducks/app/actions';
import styles from './AppBarStyle';
import AppBar from './AppBarComponent';
import { withRouter } from 'react-router-dom';

class AppBarConatiner extends Component {
	render() {
		return (
			<AppBar
				onClick={() =>
					this.props.mobileMenuHandle(!this.props.isMobileMenuOpen)
				}
				{...this.props}
			/>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isMobileMenuOpen: state.isMobileMenuOpen,
		auth: state.firebase.auth,
	};
};

export default compose(
	connect(mapStateToProps, { mobileMenuHandle, logout }),
	withStyles(styles)
)(withRouter(AppBarConatiner));
