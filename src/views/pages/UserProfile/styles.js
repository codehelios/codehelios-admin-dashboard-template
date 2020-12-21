const styles = (theme) => ({
	root: {
		display: 'flex',
	},

	addButton: {
		display: 'none',
		color: 'white',
		width: 'max-content',
		paddingLeft: '30px',
		paddingRight: '30px',
		borderRadius: '6px',
		fontWeight: '400',
		fontSize: '14px',
		backgroundColor: '#00A9A5',
		'&:hover': {
			backgroundColor: '#009e9b',
		},

		'& img': {
			marginRight: '5px',
		},

		[theme.breakpoints.up('sm')]: {
			display: 'block',
		},
	},
	addButton1: {
		display: 'block',
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	},

	addButtonLabel: {
		display: 'flex',
	},
	card: {
		padding: '16px',
		marginTop: '40px',
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		flexBasis: '33.33%',
		flexShrink: 0,
	},
	secondaryHeading: {
		fontSize: theme.typography.pxToRem(15),
		color: theme.palette.text.secondary,
	},
});

export default styles;
