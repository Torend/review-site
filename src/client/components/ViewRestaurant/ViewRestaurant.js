import React from 'react';
import {connect} from 'react-redux';
import Restaurant from "../Restaurant/Restaurant";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import {Toolbar} from "primereact/toolbar";
import {Button} from "primereact/button";
import {InputText} from "primereact/inputtext";
import {AutoComplete} from "primereact/autocomplete";
import {Dropdown} from "primereact/dropdown";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";


class ViewRestaurant extends React.Component {
    componentDidMount() {
        this.props.loadRestaurantEvent();
        this.props.LoadLocations();
    }

    render() {

        return (
            <div>
                <List>
                    <Toolbar>
                        <div className="p-toolbar-group-left">
                            <Button label="By Score" icon="pi pi-sort" style={{marginRight: '.25em'}}
                                    onClick={this.props.sortByScore}/>
                            <Button label="By Location" icon="pi pi-sort" className="p-button-warning"/>
                        </div>
                        <div className="p-toolbar-group-right">
                            <label htmlFor="in">Search By Name </label>
                            <InputText id="in" value={this.props.searchValue} style={{marginRight: '.25em'}} onChange={this.props.filterByName}/>
                            <Dropdown optionLabel="name" value={this.props.location}
                                      options={this.props.locations}
                                      onChange={this.props.filterByLocation}
                                      placeholder="Select a City"/>
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
                                    reviews={restaurant.reviews}
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
        LoadLocations: () => {
            dispatch({type: "LoadLocationsEvent"});
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

