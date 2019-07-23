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
import {red} from '@material-ui/core/colors';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {connect} from "react-redux";
import {Dialog} from "primereact/dialog";
import {Button} from "primereact/button";
import Review from "../Reivew/Review";
import {ListItemAvatar} from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ViewRestaurant from "../ViewRestaurant/ViewRestaurant";
import Gallery from "../Gallery/Gallery";
import {Toolbar} from "primereact/components/toolbar/Toolbar";

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
        backgroundColor: red[500],
    },
}));


class Restaurant extends React.Component {

    constructor() {
        super();
        this.state = {visible: false};
        this.onClick = this.onClick.bind(this);
        this.onHide = this.onHide.bind(this);
    }

    onClick() {
        this.setState({visible: true});
    }

    onHide() {
        this.setState({visible: false});
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
                                {this.props.reviews.map((review, id) => {
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
                </CardActions>
                <Collapse timeout="auto" unmountOnExit>
                </Collapse>
            </Card>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        // name: props.name,
        // location: props.location,
        // description: props.description,
        // date: props.date,
        // picture: props.picture,
        // reviews: props.reviews
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        // sortReviewsByScore: (restaurantName) =>{
        //     dispatch({type: "sortReviewsByScore", restaurantName});
        // },
        // sortReviewsByDate: (restaurantName) =>{
        //     dispatch({type: "sortReviewByDate", restaurantName});
        // }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Restaurant);
