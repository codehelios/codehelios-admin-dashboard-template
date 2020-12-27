import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'redux';
import { connect } from 'react-redux';

import styles from './SideNavStyle';
import SideNav from './SideNavComponent';
import { mobileMenuHandle } from '../../../state/ducks/app/actions';

class SideNavContainer extends Component {
	render() {
		const { isMobileMenuOpen } = this.props;
		return (
			<SideNav
				onClose={() => this.props.mobileMenuHandle(!isMobileMenuOpen)}
				{...this.props}
			/>
		);
	}
}

const mapStateToProps = (state) => {
	return { isMobileMenuOpen: state.isMobileMenuOpen };
};

export default compose(
	connect(mapStateToProps, { mobileMenuHandle }),
	withStyles(styles, { withTheme: true })
)(SideNavContainer);
