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
import IconButton from "@material-ui/core/IconButton";
import CardHeader from "@material-ui/core/CardHeader";

const classes = makeStyles(theme => ({
    card: {
        maxWidth: 500,
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


class EditReview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            visible2: false,
            r1: this.props.bathroom,
            r2: this.props.staff,
            r3: this.props.clean,
            r4: this.props.drive,
            r5: this.props.delivery,
            r6: this.props.food,
            picture: this.props.picture
        };
    }

    render() {
        return (
            <Card className={classes.card}>
                <CardHeader

                    title={this.props.restaurant}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    onClick={() => this.props.onClickSubmitEditReview(this.props.username, this.props.restaurant, this.state.r1, this.state.r2, this.state.r3,
                        this.state.r4, this.state.r5, this.state.r6, this.state.picture)}
                    className={classes.submit}
                >
                    Edit
                </Button>
                <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    onClick={() => this.props.onClickSubmitDeleteReview(this.props.id)}
                    className={classes.submit}
                >
                    Delete
                </Button>
                <Box component="fieldset" width={1} mb={0} borderColor="transparent">
                    <Typography component="legend">Bathroom Quality</Typography>
                    <Rating value={this.state.r1} cancel={false}
                            onChange={(e) => this.setState({r1: e.value})}/>
                </Box>
                <Box component="fieldset" width={1} mb={0} borderColor="transparent">
                    <Typography component="legend">Staff</Typography>
                    <Rating value={this.state.r2} cancel={false}
                            onChange={(e) => this.setState({r2: e.value})}/>
                </Box>
                <Box component="fieldset" mb={0} width={1} borderColor="transparent">
                    <Typography component="legend">Cleanliness</Typography>
                    <Rating value={this.state.r3} cancel={false}
                            onChange={(e) => this.setState({r3: e.value})}/>
                </Box>
                <Box component="fieldset" mb={0} width={1} borderColor="transparent">
                    <Typography component="legend">Drive-thru quality</Typography>
                    <Rating value={this.state.r4} cancel={false}
                            onChange={(e) => this.setState({r4: e.value})}/>
                </Box>
                <Box component="fieldset" mb={0} width={1} borderColor="transparent">
                    <Typography component="legend">Delivery Speed</Typography>
                    <Rating value={this.state.r5} cancel={false}
                            onChange={(e) => this.setState({r5: e.value})}/>
                </Box>
                <Box component="fieldset" mb={0} width={1} borderColor="transparent">
                    <Typography component="legend">Food Quality</Typography>
                    <Rating value={this.state.r6} cancel={false}
                            onChange={(e) => this.setState({r6: e.value})}/>
                </Box>
            </Card>
        );
    }
}


const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return { onClickSubmitDeleteReview:(reviewId) =>{
            dispatch({type: 'deleteReviewEvent', value: reviewId})
        },
        onClickSubmitEditReview: (username, restaurant, bathroom, staff, clean, drive, delivery, food) => {
            dispatch({
                type: "editReviewEvent",
                payload: {
                    username,
                    restaurant,
                    bathroom,
                    staff,
                    clean,
                    drive,
                    delivery,
                    food,
                }
            })
        },}
};

export default connect(mapStateToProps, mapDispatchToProps)(EditReview);
