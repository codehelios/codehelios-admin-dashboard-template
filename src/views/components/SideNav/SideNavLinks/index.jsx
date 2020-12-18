import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'redux';
import { connect } from 'react-redux';

import styles from './SideNavLinksStyle';
import SideNavLinks from './SideNavLinks';
import { openTab } from 'state/ducks/app/actions';

class SideNavLinksContainer extends Component {
	render() {
		return <SideNavLinks onClick={this.props.openTab} {...this.props} />;
	}
}

const mapStateToProps = (state) => {
	return { currentTab: state.currentTab };
};

export default compose(
	connect(mapStateToProps, { openTab }),
	withStyles(styles, { withTheme: true })
)(SideNavLinksContainer);
