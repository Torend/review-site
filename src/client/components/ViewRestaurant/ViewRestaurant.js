import React from 'react';
import {connect} from 'react-redux';
import Restaurant from "../Restaurant/Restaurant";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import {Toolbar} from "primereact/toolbar";
import {Button} from "primereact/button";
import {InputText} from "primereact/inputtext";
import {Dropdown} from "primereact/dropdown";
import {Dialog} from "primereact/components/dialog/Dialog";
import CreateRestaurant from "../CreateRestaurant/CreateRestaurant";


class ViewRestaurant extends React.Component {
    constructor(){
        super();
        this.state = {
            visible: false,
        };
        this.onClick = this.onClick.bind(this);
        this.onHide = this.onHide.bind(this);
    }


    onClick() {
        this.setState({visible: true});
    }

    onHide() {
        this.setState({visible: false});
    }

    componentDidMount() {
        this.props.loadRestaurantEvent();
    }

    render() {
        return (
            <div>
                <List>
                    <Toolbar>
                        <div className="p-toolbar-group-left">
                            <Button label="By Score" icon="pi pi-sort" style={{marginRight: '.25em'}}
                                    onClick={this.props.sortByScore}/>
                            <Button label="By Location" icon="pi pi-sort" className="p-button-warning" onClick={this.props.sortByLocation}/>
                            <Dialog visible={this.state.visible}
                                    style={{width: '60vw'}} onHide={this.onHide} maximizable>
                                <CreateRestaurant/>
                            </Dialog>
                            <Button
                                className={'p-button-danger'}
                                label="Add Restaurant"
                                icon=" pi pi-plus-circle"
                                onClick={this.onClick}
                                style={{marginRight: '.25em'}}
                            />
                        </div>
                        <div className="p-toolbar-group-right">
                            <InputText id="in"  placeholder={"Search By Name"} value={this.props.searchValue} style={{marginRight: '.25em'}} onChange={this.props.filterByName}/>
                            <Dropdown
                                value={this.props.location}
                                options={this.props.locations}
                                onChange={this.props.filterByLocation}
                                editable={true}
                                placeholder="Select a City"
                            />
                        </div>
                    </Toolbar>
                    <ListItem alignItems="flex-start">
                        <Typography>
                            {this.props.restaurants.map((restaurant, id) => {
                                return <Restaurant
                                    key={id}
                                    name={restaurant.name}
                                    location={restaurant.location}
                                    description={restaurant.description}
                                    picture={restaurant.picture}
                                />;
                            })}
                        </Typography>
                    </ListItem>
                </List>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        restaurants: state['viewRestaurant'].get('restaurants'),
        locations: state["viewRestaurant"].get("locations")
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadRestaurantEvent: () => {
            dispatch({type: "loadRestaurantEvent"});
        },
        sortByLocation: () => {
            dispatch({type: "sortByLocation"});
        },
        sortByScore: () => {
            dispatch({type: "sortByScore"});
        },
        filterByName: (e) => {
            dispatch({type: "filterByName", value: e.target.value});
        },
        filterByLocation: (e) => {
            dispatch({type: "filterByLocation", value: e.target.value});
        },

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewRestaurant);

