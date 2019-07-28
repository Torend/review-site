import {connect} from "react-redux";
import React, {Component} from 'react';
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import {Dialog} from "primereact/components/dialog/Dialog";
import Card from "@material-ui/core/Card";
import {Button} from "primereact/button";

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
                    subheader={"location"+this.props.location}
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
                                {/*{this.props.reviews.map((review, id) => {*/}
                                {/*    return <List>*/}
                                {/*        <Review*/}
                                {/*            key={id}*/}
                                {/*            value={review}*/}
                                {/*        />*/}
                                {/*    </List>*/}
                                {/*})}*/}
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
        // username: state['viewProfile'].get('username'),
        // location: state['viewProfile'].get('location'),
        // picture: state['viewProfile'].get('picture'),
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadUsersEventHandler: () => {
            dispatch({type: 'loadUserEvent', value: (localStorage.getItem('username'))})
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewProfile);
