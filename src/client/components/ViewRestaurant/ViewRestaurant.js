import React from 'react';
import {connect} from 'react-redux';
import Restaurant from "../Restaurant/Restaurant";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import {Toolbar} from "primereact/toolbar";
import {Button} from "primereact/button";




class ViewRestaurant extends React.Component {
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
                            <Button label="BY Location" icon="pi pi-sort" className="p-button-success"
                                    onClick={this.props.sortByLocation}/>
                            <Button label="Save" icon="pi pi-sort" className="p-button-warning"/>
                        </div>
                        <div className="p-toolbar-group-right">
                            <Button icon="pi pi-search" style={{marginRight: '.25em'}}/>
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
        restaurants: state['viewRestaurant'].get('restaurants')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadRestaurantEvent: () => {
            dispatch({type: "loadRestaurantEvent"});
        },
        sortByScore: () => {
            dispatch({type: "sortByScore"});
        },
        sortByLocation: () => {
            dispatch({type: "sortByLocation"});
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewRestaurant);

