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
import SignInActions from "../SignIn/actions";
import {Dropdown} from "primereact/dropdown";


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

class SignIn extends Component {

    render() {
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        Sign In
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
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={() => this.props.onClickSubmitEventHandler(this.props.username)}
                            className={classes.submit}
                        >
                            Sign In
                        </Button>
                        <Grid container justify="flex-end">
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
        username: state['signIn'].get('username')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClickSubmitEventHandler: (username) => {
            dispatch(SignInActions.Login(username))
        },
        handleUsernameChange: (e) => {
            dispatch({type: 'onUsernameChange', value: e.target.value})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
