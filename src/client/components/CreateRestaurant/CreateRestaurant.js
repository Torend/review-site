import React from 'react';
import {connect} from 'react-redux';
import Typography from "@material-ui/core/Typography";
import {Dropdown} from "primereact/dropdown";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button";

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
        width: "200px",
        height: "200px"
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),

    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


class CreateRestaurant extends React.Component {

    render() {
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        Create New Restaurant
                    </Typography>
                    <form className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={20}>
                                <TextField
                                    name="name"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="name"
                                    label="restaurant name"
                                    autoFocus
                                    onChange={this.props.handleNameChange}
                                />
                                <TextField
                                    name="description"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="description"
                                    label="description"
                                    autoFocus
                                    onChange={this.props.handleDescriptionChange}
                                />
                            </Grid>
                            <Grid item xs={20}>
                                <Dropdown
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
                                        <Avatar src={this.props.picture}
                                                style={{borderRadius: 0, width: "200", height: "200"}}/>
                                    </Grid>
                                </label>
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={e => {e.preventDefault();
                            this.props.createRestaurantEvent(this.props.name, this.props.location, this.props.description, this.props.picture)}}
                            className={classes.submit}
                        >
                            Create
                        </Button>
                    </form>
                </div>
            </Container>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        name: state['createRestaurant'].get('name'),
        location: state['createRestaurant'].get('location'),
        description: state["createRestaurant"].get('description'),
        picture: state['createRestaurant'].get('picture'),
        locations: state['createRestaurant'].get('locations')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleNameChange: (e) => {
            dispatch({type: 'onRestaurantNameChange', value: e.target.value})
        },
        handleDescriptionChange: (e) => {
            dispatch({type: 'onDescriptionChange', value: e.target.value})
        },
        handlePictureChange: (e) => {
            dispatch({type: 'onPictureChange', value: e.target.files[0]})
        },
        handleLocationChange: (e) => {
            dispatch({type: 'onLocationChange', value: e.target.value})
        },
        createRestaurantEvent: (name, location, description, picture) => {//TODO have some bug
            dispatch({type: "createRestaurantEvent", payload:{
                    name,
                    location,
                    description,
                    picture
                }})
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateRestaurant);

