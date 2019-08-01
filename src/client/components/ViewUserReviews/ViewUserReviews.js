import {connect} from "react-redux";
import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import List from "@material-ui/core/List";
import {Toolbar} from "primereact/components/toolbar/Toolbar";
import {InputText} from "primereact/components/inputtext/InputText";
import ListItem from "@material-ui/core/ListItem";
import ViewUser from "../ViewUser/ViewUser";
import EditReview from "../EditReview/EditReview";


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


class ViewUserReviews extends Component {

    componentDidMount() {
        this.props.loadReviewsEvent();
    }

    render() {
        return (
            <div>
                <List>
                    <ListItem alignItems="flex-start">
                            {this.props.reviews.map((rev) => {
                                return <EditReview
                                    key={rev.id}
                                    id={rev._id}
                                    username={rev.username}
                                    restaurant={rev.restaurant}
                                    picture={rev.picture}
                                    bathroom={rev.bathroom}
                                    staff={rev.staff}
                                    clean={rev.clean}
                                    drive={rev.drive}
                                    delivery={rev.delivery}
                                    food={rev.food}
                                />;
                            })}
                    </ListItem>
                </List>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        reviews: state['viewUserReviews'].get('reviews'),
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadReviewsEvent:() =>{
            dispatch({type: 'loadThisUserReviewsEvent', value: (localStorage.getItem('username'))})
        },

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewUserReviews);
