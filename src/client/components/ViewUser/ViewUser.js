import React from 'react';
import {connect} from "react-redux";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import {Dialog} from "primereact/components/dialog/Dialog";
import List from "@material-ui/core/List";
import Review from "../Review/Review";
import {Button} from "primereact/components/button/Button";
import CreateReview from "../CreateReview/CreateReview";
import Collapse from "@material-ui/core/Collapse";
import {makeStyles} from "@material-ui/core";

export function saveReviews(lst) {
    const reviewList = lst;
}


class viewUser extends React.Component {

    componentDidMount() {
        this.props.loadUserReviewsEvent(this.props.name);
    }

    constructor() {
        super();
        this.state = {visible: false};
        this.onClick = this.onClick.bind(this);
        this.onHide = this.onHide.bind(this);
      //  this.reviewByName = this.reviewByName(this);
    }

    onClick() {
        this.setState({visible: true});
    }

    onHide() {
        this.setState({visible: false});
    }
    //
    // reviewByName(reviews, name) {
    //   return reviews.filter(rev => {
    //         return rev.username === name;
    //     })
    // }//

    render() {

        return (
            <Card style={{width: 400}}>
                <CardHeader
                    title={this.props.name}
                    subheader={this.props.location}
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
                                {this.props.userReviews.toArray().flat().filter(rev => {
                                    return rev.username === this.props.name;
                                }).map((review) => {
                                    return <List>
                                        <Review
                                            key={review.id}
                                            value={review}
                                        />
                                    </List>
                                })}
                            </Dialog>
                            <Button label="Reviews" icon="pi pi-external-link" onClick={this.onClick}/>
                        </div>
                    </div>
                </CardActions>
            </Card>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        userReviews: state["viewUser"].get("userReviews")
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadUserReviewsEvent: (name) => {
            dispatch({type: 'loadUserReviewsEvent', value: name})
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(viewUser);
