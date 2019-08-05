import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {connect} from "react-redux";
import {Dialog} from "primereact/dialog";
import {Button} from "primereact/button";
import Review from "../Review/Review";
import List from "@material-ui/core/List";
import {Toolbar} from "primereact/components/toolbar/Toolbar";
import CreateReview from "../CreateReview/CreateReview";

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
        backgroundColor: theme.palette.secondary.main,
    },
    body: {
        backgroundColor: theme.palette.common.white,
    },
}));


class Restaurant extends React.Component {

    componentDidMount() {
        this.props.loadRestaurantReviewsEvent(this.props.name);
    }

    constructor() {
        super();
        this.state = {
            visible: false,
            visible2: false,
        };
        this.onClick = this.onClick.bind(this);
        this.onHide = this.onHide.bind(this);
        this.onClick2 = this.onClick2.bind(this);
        this.onHide2 = this.onHide2.bind(this);
    }


    onClick() {
        this.setState({visible: true});
    }

    onHide() {
        this.setState({visible: false});
    }

    onClick2() {
        this.setState({visible2: true});
    }

    onHide2() {
        this.setState({visible2: false});
    }


    render() {
        const footer = (
            <div>
                <Toolbar>
                    <div className="p-toolbar-group-right">
                        <Button label="By Score" icon="pi pi-sort" style={{marginRight: '.25em'}}
                            //onClick={this.props.sortReviewsByScore(this.props.name)}
                        />
                        <Button label="By Date" icon="pi pi-sort" className="p-button-success"
                            //onClick={this.props.sortReviewsByDate(this.props.name)}
                        />
                        <Button label="Add" icon="pi pi-pencil" onClick={this.onHide}/>
                    </div>
                </Toolbar>
            </div>
        );
        return (
            <Card className={classes.card}>
                {this.props.date}
                <CardHeader
                    avatar={
                        <Avatar aria-label="Recipe" className={classes.avatar}>
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="Settings">
                            <MoreVertIcon/>
                        </IconButton>
                    }
                    title={this.props.name}
                    subheader={this.props.location}
                />
                <CardMedia
                    className={classes.media}
                    image={this.props.picture}

                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {this.props.description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <div>
                        <div className="content-section introduction">
                            <div className="feature-intro">
                            </div>
                        </div>
                        <div className="content-section implementation">
                            <Dialog
                                footer={footer}
                                visible={this.state.visible}
                                contentStyle={{maxHeight: "800px", width: "400px", overflow: "auto"}}
                                modal={true}
                                maximizable={true}
                                onHide={this.onHide}>
                                {this.props.restaurantReviews.toArray().flat().filter(rev => {
                                    return rev.restaurant === this.props.name;
                                }).map((review, id) => {
                                    return <List>
                                        <Review
                                            key={id}
                                            value={review}
                                        />
                                    </List>
                                })}
                            </Dialog>
                            <Button label="Reviews" icon="pi pi-external-link" onClick={this.onClick}/>
                        </div>
                    </div>
                    <IconButton aria-label="Share">
                        <ShareIcon/>
                    </IconButton>
                    <Dialog visible={this.state.visible2}
                            style={{width: '60vw'}} onHide={this.onHide2} maximizable>
                        <CreateReview
                            username={this.props.username}
                            name={this.props.name}
                        />
                    </Dialog>
                    <Button
                        className={'p-button-danger'}
                        label="Add Review"
                        icon="pi pi-pencil"
                        onClick={this.onClick2}
                        style={{marginRight: '.25em'}}
                    />
                </CardActions>
                <Collapse timeout="auto" unmountOnExit>
                </Collapse>
            </Card>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        restaurantReviews: state["restaurant"].get("restaurantReviews")
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadRestaurantReviewsEvent: (name) => {
            dispatch({type: 'loadRestaurantReviewsEvent', value: name})
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Restaurant);
