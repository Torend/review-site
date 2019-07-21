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
        this.itemTemplate = this.itemTemplate.bind(this);
    }

    onClick() {
        this.setState({visible: true});
    }

    onHide() {
        this.setState({visible: false});
    }

    itemTemplate(car, layout) {
        if (layout === 'list') {
            return (
                <div className="p-grid">
                    <div>{"car.brand"}</div>
                </div>
            );
        }
        if (layout === 'grid') {
            return (
                <div className="p-col-12 p-md-3">
                    <div>{"car.brand"}</div>
                </div>
            );
        }
    }

    render() {
        const footer = (
            <div>
                <Button label="Yes" icon="pi pi-check" onClick={this.onHide}/>
                <Button label="No" icon="pi pi-times" onClick={this.onHide} className="p-button-secondary"/>
            </div>
        );
        return (
            <Card className={classes.card}>
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
                    image={this.props.img}
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
                            <Dialog header={this.props.name + " Reviews"} visible={this.state.visible}
                                    style={{width: '50vw'}} footer={footer} onHide={this.onHide} maximizable>
                                <List>
                                {this.props.reviews.map((review, id) => {
                                    return <ListItem>
                                        <Review
                                        key={id}
                                        value={review}
                                    />
                                    </ListItem>
                                })}
                                </List>
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
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Restaurant);
