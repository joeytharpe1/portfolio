import { makeStyles } from '@material-ui/core/styles';

import TextLoop from "react-text-loop";
import Fade from 'react-reveal/Fade';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';

import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
	card: {
		marginBottom: 5,
		border: '1px solid #BCA88E',
		backgroundColor: '#fff',
		transition: "transform 0.15s ease-in-out",
		"&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
	},
	textani: {
		fontStyle: 'italic',
		align: "center",
		transition: "transform 0.15s ease-in-out",
		'&:hover': {
			transform: "scale3d(1.05, 1.05, 1)",
			color: theme.palette.secondary.main,
		}
	},
	header: {
		color: theme.palette.primary.main,
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
		<Card className={classes.card} elevation={15}>
			<CardHeader align="center"
				className={classes.header}
				title='SkillSet'
			/>
			<CardContent>
				<CardActions>
					<Fade bottom>
						<Button color="#fff"  size='small' className={classes.textani} >
							<TextLoop>
								<span style={{ color: '#BCA88E' }}>Bootstrap</span>
								<span style={{ color: 'black' }}>Bootstrap</span>
								<span style={{ color: 'grey' }}>Bootstrap</span>
							</TextLoop>
						</Button>
					</Fade>
					<Fade top>
						<Button color="#fff"  size='small' className={classes.textani} >
							<TextLoop>
								<span style={{ color: 'grey' }}>Material UI</span>
								<span style={{ color: '#BCA88E' }}>Material UI</span>
								<span style={{ color: 'black' }}>Material UI</span>
							</TextLoop>
						</Button>
					</Fade>
					<Fade left>
						<Button color="#fff"  size='small' className={classes.textani} >
							<TextLoop>
								<span style={{ color: 'black' }}>CSS</span>
								<span style={{ color: 'grey' }}>CSS</span>
								<span style={{ color: '#BCA88E' }}>CSS</span>
							</TextLoop>
						</Button>
					</Fade>
					<Fade right>
						<Button color="#fff"  size='small' className={classes.textani}>
							<TextLoop>
								<span style={{ color: '#BCA88E' }}>HTML</span>
								<span style={{ color: 'black' }}>HTML</span>
								<span style={{ color: 'grey' }}>HTML</span>
							</TextLoop>
						</Button>
					</Fade>
				</CardActions>
				<CardActions>
					<Fade top>
						<Button color="#fff"  size='small' className={classes.textani} >
							<TextLoop>
								<span style={{ color: 'grey' }}>React JS</span>
								<span style={{ color: '#BCA88E' }}>React JS</span>
								<span style={{ color: 'black' }}>React JS</span>
							</TextLoop>
						</Button>
					</Fade>
					<Fade bottom>
						<Button color="#fff"  size='small' className={classes.textani} >
							<TextLoop>
								<span style={{ color: 'black' }}>Node JS</span>
								<span style={{ color: 'grey' }}>Node JS</span>
								<span style={{ color: '#BCA88E' }}>Node JS</span>
							</TextLoop>
						</Button>
					</Fade>
					<Fade right>
						<Button color="#fff"  size='small' className={classes.textani} >
							<TextLoop>
								<span style={{ color: '#BCA88E' }}>Mongo DB</span>
								<span style={{ color: 'black' }}>Mongo DB</span>
								<span style={{ color: 'grey' }}>Mongo DB</span>
							</TextLoop>
						</Button>
					</Fade>
					<Fade left>
						<Button color="#fff"  size='small' className={classes.textani}>
							<TextLoop>
								<span style={{ color: 'grey' }}>JSON</span>
								<span style={{ color: '#BCA88E' }}>JSON</span>
								<span style={{ color: 'black' }}>JSON</span>
							</TextLoop>
						</Button>
					</Fade>
				</CardActions>
			</CardContent>
		</Card>
	)
}

export default Myskills;
