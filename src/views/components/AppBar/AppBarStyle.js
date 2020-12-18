const styles = (theme) => ({
	root: {
		display: 'flex',
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
	appBar: {
		backgroundColor: '#ECECEC',
		[theme.breakpoints.up('md')]: {
			width: (props) => `calc(100% - ${props.drawerWidth})`,
			marginLeft: (props) => props.drawerWidth,
		},
	},
	bgAvatar: {
		color: theme.palette.common.white,
		backgroundColor: '#022B3A',
	},
});

export default styles;
