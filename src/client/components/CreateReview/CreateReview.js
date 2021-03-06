import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import {connect} from "react-redux";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import {Rating} from "primereact/rating";
import Button from "@material-ui/core/Button";

const classes = makeStyles(theme => ({
    card: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        margin: theme.spacing(1),
        //backgroundColor: theme.palette.secondary.main,
    },
    body: {
        backgroundColor: theme.palette.common.white,
    },
    submit: {
        margin: theme.spacing(5, 2, 5),
    },
}));


class CreateReview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            visible2: false,
            r1: 0,
            r2: 0,
            r3: 0,
            r4: 0,
            r5: 0,
            r6: 0,
            picture: null
        };
    }


    render() {
        // localStorage.setItem('username', "usus");
        return (
            <Card className={classes.card}>
                <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    onClick={() => this.props.onClickSubmitCrateReview(localStorage.getItem('username'), this.props.name, this.state.r1, this.state.r2, this.state.r3,
                        this.state.r4, this.state.r5, this.state.r6, this.state.picture)}
                    className={classes.submit}
                >
                    Submit
                </Button>
                <Box component="fieldset" width={1 / 5} mb={0} borderColor="transparent">
                    <Typography component="legend">Bathroom Quality</Typography>
                    <Rating value={this.state.r1} cancel={false}
                            onChange={(e) => this.setState({r1: e.value})}/>
                </Box>
                <Box component="fieldset" width={1 / 5} mb={0} borderColor="transparent">
                    <Typography component="legend">Staff</Typography>
                    <Rating value={this.state.r2} cancel={false}
                            onChange={(e) => this.setState({r2: e.value})}/>
                </Box>
                <Box component="fieldset" mb={0} width={1 / 5} borderColor="transparent">
                    <Typography component="legend">Cleanliness</Typography>
                    <Rating value={this.state.r3} cancel={false}
                            onChange={(e) => this.setState({r3: e.value})}/>
                </Box>
                <Box component="fieldset" mb={0} width={1 / 5} borderColor="transparent">
                    <Typography component="legend">Drive-thru quality</Typography>
                    <Rating value={this.state.r4} cancel={false}
                            onChange={(e) => this.setState({r4: e.value})}/>
                </Box>
                <Box component="fieldset" mb={0} width={1 / 5} borderColor="transparent">
                    <Typography component="legend">Delivery Speed</Typography>
                    <Rating value={this.state.r5} cancel={false}
                            onChange={(e) => this.setState({r5: e.value})}/>
                </Box>
                <Box component="fieldset" mb={0} width={1 / 5} borderColor="transparent">
                    <Typography component="legend">Food Quality</Typography>
                    <Rating value={this.state.r6} cancel={false}
                            onChange={(e) => this.setState({r6: e.value})}/>
                </Box>
                <Grid item xs={12} sm={6}>
                    <Grid item xs={12}>
                        <input
                            accept="image/*"
                            className={classes.input}
                            style={{display: 'none'}}
                            id="raised-button-file"
                            multiple
                            type="file"
                            onChange={(e) => {
                                this.setState({picture: URL.createObjectURL(e.target.files[0])})
                            }}
                        />
                        <label htmlFor="raised-button-file">
                            <Grid>
                                Upload Picture
                                <Avatar alt="Remy Sharp" src={this.state.picture} className={classes.avatar}/>
                            </Grid>
                        </label>
                    </Grid>
                </Grid>
            </Card>
        );
    }
}


const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClickSubmitCrateReview: (username, restaurant, bathroom, staff, clean, drive, delivery, food, picture) => {
            dispatch({
                type: "createReviewEvent",
                payload: {
                    username,
                    restaurant,
                    bathroom,
                    staff,
                    clean,
                    drive,
                    delivery,
                    food,
                    picture
                }
            })
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateReview);
