import {connect} from "react-redux";
import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import SignUpActions from "../SignUp/actions";
import {Dropdown} from "primereact/dropdown";
import { Redirect, Link as Linker, Route, Switch } from "react-router-dom";


export const classes = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

class SignUp extends Component {

    componentDidMount() {
        this.props.loadLocationsEvent();
    }

    render() {
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <form className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="username"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="username"
                                    label="Username"
                                    autoFocus
                                    onChange={this.props.handleUsernameChange}
                                />
                            </Grid>
                            <Grid item xs={20}>
                                <Dropdown //change later
                                    value={this.props.location}
                                    onChange={this.props.handleLocationChange}
                                    options={this.props.locations}
                                    placeholder="insert location"
                                    editable={true}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <input
                                    accept="image/*"
                                    className={classes.input}
                                    style={{display: 'none'}}
                                    id="raised-button-file"
                                    multiple
                                    type="file"
                                    onChange={this.props.handlePictureChange}
                                />
                                <label htmlFor="raised-button-file">
                                    <Button
                                        variant="raised"
                                        component="span"
                                        color="primary"
                                        className={classes.button}
                                    >
                                        Upload Picture
                                    </Button>
                                    <Grid container justify="center" alignItems="center">
                                        <Avatar alt="Remy Sharp" src={this.props.picture} className={classes.avatar} />
                                    </Grid>
                                </label>
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={() => this.props.onClickSubmitEventHandler(this.props.username, this.props.location, this.props.picture)}
                            className={classes.submit}
                        >
                            Sign Up
                        </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Linker to="/SignIn">Already have an account? Sign in</Linker>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <Box mt={5}>
                </Box>
            </Container>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        username: state['signUp'].get('username'),
        location: state['signUp'].get('location'),
        picture: state['signUp'].get('picture'),
        locations: state['signUp'].get('locations')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleLocationChange: (e) => {
            dispatch({type: 'onLocationChange', value: e.target.value})
        },
        handleUsernameChange: (e) => {
            dispatch({type: 'onUsernameChange', value: e.target.value})
        },
        handlePictureChange: (e) => {
            console.log(e.target.files[0]);
            dispatch({type: 'onPictureChange', value: e.target.files[0]})
        },
        onClickSubmitEventHandler: (username, location, picture) => {
            console.log("fucker");
            alert("Hello! I am an alert box!!");
            dispatch(SignUpActions.Register(username, location, picture))
            //dispatch({type: 'onSubmit', username: username, location: location, picture: picture})
        },
        loadLocationsEvent:() =>{
            dispatch({type: 'LoadLocations'})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
