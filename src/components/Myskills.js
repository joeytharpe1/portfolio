import { makeStyles } from '@material-ui/core/styles';
import TextLoop from "react-text-loop";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';

import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
	card: {
		marginBottom: 5,
		border: '1px solid #34eba8',
		backgroundColor: theme.palette.primary.main,
		transition: "transform 0.15s ease-in-out",
		"&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
	},
	textani: {
		align: "center",
		transition: "transform 0.15s ease-in-out",
		'&:hover': {
			transform: "scale3d(1.05, 1.05, 1)",
			color: theme.palette.secondary.main,
		}
	},
	header: {
		transition: "transform 0.15s ease-in-out",
		'&:hover': {
			transform: "scale3d(1.05, 1.05, 1)",
			color: theme.palette.secondary.main,
			cursor: 'pointer',
		}
	}
}));



function Myskills() {
	const classes = useStyles();

	return (
		<Card className={classes.card}>
			<CardHeader align="center"
				className={classes.header}
				title='SkillSet'
			/>
			<CardContent>
				<CardActions>
					<Button color="primary" variant='contained' size='small' className={classes.textani} >
						<TextLoop>
							<span style={{ color: 'grey' }}>Bootstrap</span>
							<span style={{ color: '#34eba8' }}>Bootstrap</span>
							<span style={{ color: 'white' }}>Bootstrap</span>
						</TextLoop>
					</Button>
					<Button color="primary" variant='contained' size='small' className={classes.textani} >
					<TextLoop>
							<span style={{ color: 'grey' }}>Material UI</span>
							<span style={{ color: '#34eba8' }}>Material UI</span>
							<span style={{ color: 'white' }}>Material UI</span>
						</TextLoop>
					</Button>
					<Button color="primary" variant='contained' size='small' className={classes.textani} >
					<TextLoop>
							<span style={{ color: 'grey' }}>CSS</span>
							<span style={{ color: '#34eba8' }}>CSS</span>
							<span style={{ color: 'white' }}>CSS</span>
						</TextLoop>
					</Button>
					<Button color="primary" variant='contained' size='small' className={classes.textani}>
					<TextLoop>
							<span style={{ color: 'grey' }}>HTML</span>
							<span style={{ color: '#34eba8' }}>HTML</span>
							<span style={{ color: 'white' }}>HTML</span>
						</TextLoop>
					</Button>
				</CardActions>
				<CardActions>
					<Button color="primary" variant='contained' size='small' className={classes.textani} >
					<TextLoop>
							<span style={{ color: 'grey' }}>React JS</span>
							<span style={{ color: '#34eba8' }}>React JS</span>
							<span style={{ color: 'white' }}>React JS</span>
						</TextLoop>
					</Button>
					<Button color="primary" variant='contained' size='small' className={classes.textani} >
					<TextLoop>
							<span style={{ color: 'grey' }}>Node JS</span>
							<span style={{ color: '#34eba8' }}>Node JS</span>
							<span style={{ color: 'white' }}>Node JS</span>
						</TextLoop>
					</Button>
					<Button color="primary" variant='contained' size='small' className={classes.textani} >
					<TextLoop>
							<span style={{ color: 'grey' }}>Mongo DB</span>
							<span style={{ color: '#34eba8' }}>Mongo DB</span>
							<span style={{ color: 'white' }}>Mongo DB</span>
						</TextLoop>
					</Button>
					<Button color="primary" variant='contained' size='small' className={classes.textani}>
					<TextLoop>
							<span style={{ color: 'grey' }}>JSON</span>
							<span style={{ color: '#34eba8' }}>JSON</span>
							<span style={{ color: 'white' }}>JSON</span>
						</TextLoop>
					</Button>
				</CardActions>
			</CardContent>
		</Card>
	)
}

export default Myskills;
