import React from 'react';
import Typography from '@material-ui/core/Typography';
import {connect} from "react-redux";
import Rating from '@material-ui/lab/Rating';
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import {Dialog} from "primereact/components/dialog/Dialog";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {Button} from "primereact/components/button/Button";

class Review extends React.Component {
    constructor() {
        super();
        this.state = {visible: false};
        this.onClick = this.onClick.bind(this);
        this.onHide = this.onHide.bind(this);
        Review.average = Review.average.bind(this);
    }

    onClick() {
        this.setState({visible: true});
    }

    onHide() {
        this.setState({visible: false});
    }

    static average(x1, x2, x3, x4, x5, x6) {
        return ((x1 + x2 + x3 + x4 + x5 + x6) / 6);
    }

    render() {
        const footer = (
            <div>
                <Button label="Yes" icon="pi pi-check" onClick={this.onHide}/>
                <Button label="No" icon="pi pi-times" onClick={this.onHide} className="p-button-secondary"/>
            </div>
        );

        return (
            <Card style={{width: 400}}>
                <Typography fontSize={18} color="textSecondary" gutterBottom>
                    <h4>Restaurant: {this.props.value.restaurant}</h4>
                    <h4>Reviewed by: {this.props.value.username}</h4>
                    <h4>{this.props.value.date}</h4>
                    <Box component="fieldset" width={1 / 8} mb={0} borderColor="transparent">
                        <Typography component="legend">Average Rating</Typography>
                        <Rating
                            value={Review.average(this.props.value.bathroom, this.props.value.staff, this.props.value.clean,
                                this.props.value.drive, this.props.value.delivery, this.props.value.food)} readOnly/>
                    </Box>
                    <Dialog header={this.props.value.username + " Rating"} visible={this.state.visible}
                            style={{width: '50vw'}} onHide={this.onHide} maximizable>
                        <Box component="fieldset" width={1 / 8} mb={0} borderColor="transparent">
                            <Typography component="legend">Bathroom Quality</Typography>
                            <Rating value={this.props.value.bathroom} readOnly/>
                        </Box>
                        <Box component="fieldset" width={1 / 8} mb={0} borderColor="transparent">
                            <Typography component="legend">Staff Kindness</Typography>
                            <Rating value={this.props.value.staff} readOnly/>
                        </Box>
                        <Box component="fieldset" mb={0} width={1 / 8} borderColor="transparent">
                            <Typography component="legend">Cleanliness</Typography>
                            <Rating value={this.props.value.clean} readOnly/>
                        </Box>
                        <Box component="fieldset" mb={0} width={1 / 8} borderColor="transparent">
                            <Typography component="legend">Drive-thru quality</Typography>
                            <Rating value={this.props.value.drive} readOnly/>
                        </Box>
                        <Box component="fieldset" mb={0} width={1 / 8} borderColor="transparent">
                            <Typography component="legend">Delivery Speed</Typography>
                            <Rating value={this.props.value.delivery} readOnly/>
                        </Box>
                        <Box component="fieldset" mb={0} width={1 / 8} borderColor="transparent">
                            <Typography component="legend">Food Quality</Typography>
                            <Rating value={this.props.value.food} readOnly/>
                        </Box>
                    </Dialog>
                    <Button className="p-button-secondary" label="Ratings" icon="pi pi-external-link"
                            onClick={this.onClick}/>

                </Typography>
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

export default connect(mapStateToProps, mapDispatchToProps)(Review);
