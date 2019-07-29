import {connect} from "react-redux";
import React, {Component} from 'react';
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import {Dialog} from "primereact/components/dialog/Dialog";
import Card from "@material-ui/core/Card";
import {Button} from "primereact/button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {Dropdown} from "primereact/dropdown";

class ViewProfile extends Component {
    constructor() {
        super();
        this.state = {visible: false,};
        this.onClick = this.onClick.bind(this);
        this.onHide = this.onHide.bind(this);
    }

    componentDidMount() {
        this.props.loadUsersEventHandler();
    }


    onClick() {
        this.setState({visible: true});
    }

    onHide() {
        this.setState({visible: false});
    }

    render() {
        return (
            <Card style={{width: 240}}>
                <CardHeader
                    title={"name: " +localStorage.getItem('username')}
                    subheader={"location: "+this.props.location}
                />
                <CardMedia
                    image={this.props.picture}
                />
                <CardActions disableSpacing>
                    <div>
                        <div className="content-section introduction">
                            <div className="feature-intro">
                            </div>
                        </div>
                        <div className="content-section implementation">
                            <Dialog
                                visible={this.state.visible}
                                contentStyle={{maxHeight: "800px", width: "400px", overflow: "auto"}}
                                modal={true}
                                maximizable={true}
                                onHide={this.onHide}>
                                <Container component="main" maxWidth="xs">
                                    <CssBaseline/>
                                    <div>
                                        <Typography component="h1" variant="h5">
                                            edit profile
                                        </Typography>
                                        <form noValidate>
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
                                                    <Dropdown
                                                        value={this.props.location}
                                                        onChange={this.props.handleLocationChange}
                                                        options={this.props.locations}
                                                        placeholder="insert location"
                                                        editable={true}
                                                    />
                                                </Grid>
                                            </Grid>
                                            {/*<Button label="submit" icon="pi pi-pencil"*/}
                                            {/*        onClick={this.props.editProfileEvent(this.props.username, this.props.location)}/>*/}
                                        </form>
                                    </div>
                                </Container>
                            </Dialog>
                            <Button label="Edit Profile" icon="pi pi-pencil" onClick={this.onClick}/>
                        </div>
                    </div>
                </CardActions>
            </Card>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        username: state['viewProfile'].get('username'),
        location: state['viewProfile'].get('location'),
        picture: state['viewProfile'].get('picture'),
        locations: state['viewRestaurant'].get('locations')
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
        loadUsersEventHandler: () => {
            dispatch({type: 'loadUserEvent', value: (localStorage.getItem('username'))})
        },
        // editProfileEvent: (username, location) => {
        //     dispatch({type: 'editProfileEvent', username: (localStorage.getItem('username')),
        //         payload:{
        //             username: username,
        //             location: location
        //         }})
        // },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewProfile);
