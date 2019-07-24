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
                <Button label="Yes" icon="pi pi-check" onClick={this.onHide}/>
                <Button label="No" icon="pi pi-times" onClick={this.onHide} className="p-button-secondary"/>
            </div>
        );

        return (
            <Card style={{width: 400}}>
                <Typography fontSize={18} color="textSecondary" gutterBottom>
                    <h4>Reviewed by: {this.props.value.name}</h4>
                    <h4>{this.props.value.date}</h4>
                    <Box component="fieldset" width={1 / 8} mb={0} borderColor="transparent">
                        <Typography component="legend">Average Rating</Typography>
                        <Rating value={this.props.value.average} readOnly/>
                    </Box>
                    <Dialog header={this.props.name + " Rating"} visible={this.state.visible}
                            style={{width: '50vw'}} onHide={this.onHide} maximizable>
                        <Box component="fieldset" width={1 / 8} mb={0} borderColor="transparent">
                            <Typography component="legend">Bathroom Quality</Typography>
                            <Rating value={this.props.value.r1} readOnly/>
                        </Box>
                        <Box component="fieldset" width={1 / 8} mb={0} borderColor="transparent">
                            <Typography component="legend">Staff Kindness</Typography>
                            <Rating value={this.props.value.r2} readOnly/>
                        </Box>
                        <Box component="fieldset" mb={0} width={1 / 8} borderColor="transparent">
                            <Typography component="legend">Cleanliness</Typography>
                            <Rating value={this.props.value.r3} readOnly/>
                        </Box>
                        <Box component="fieldset" mb={0} width={1 / 8} borderColor="transparent">
                            <Typography component="legend">Drive-thru quality</Typography>
                            <Rating value={this.props.value.r4} readOnly/>
                        </Box>
                        <Box component="fieldset" mb={0} width={1 / 8} borderColor="transparent">
                            <Typography component="legend">Delivery Speed</Typography>
                            <Rating value={this.props.value.r5} readOnly/>
                        </Box>
                        <Box component="fieldset" mb={0} width={1 / 8} borderColor="transparent">
                            <Typography component="legend">Food Quality</Typography>
                            <Rating value={this.props.value.r6} readOnly/>
                        </Box>
                        <h4>{this.props.value.desc}</h4>
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
