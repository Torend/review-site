import React from 'react';
import {connect} from 'react-redux';
import Restaurant from "../Restaurant/Restaurant";
import Typography from "@material-ui/core/Typography";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import MaterialTable from 'material-table';
import {DataView} from "primereact/dataview";
import Image from "../Image";

const review ={
    name: "Toren",
    date: "12.3.2019",
    desc: "bla bla bla bla bla bla",
    average:3,
    r1: 4,
    r2: 2,
    r3: 4,
    r4: 5,
    r5: 3,
    r6: 4,
};

const data = [{
    name: "Mcdonalds",
    location: "tel Aviv",
    description: "McDonald's is an American fast food company, founded in 1940 as a restaurant operated by Richard and Maurice McDonald",
    reviews:[review ,review, review]
}, {
    name: "Mcdonalds",
    location: "beerSheva",
    description: "McDonald's is an American fast food company, founded in 1940 as a restaurant operated by Richard and Maurice McDonald",
    reviews: [review, review]
},{
    name: "Mcdonalds",
    location: "ramtGan",
    description: "McDonald's is an American fast food company, founded in 1940 as a restaurant operated by Richard and Maurice McDonald",
    reviews: [review]
}];


class ViewRestaurant extends React.Component {
    componentDidMount() {
        this.props.loadRestaurantEvent();
    }

    render() {
        return (
            <div>
                <List>
                    <ListItem alignItems="flex-start">
                        <Typography>
                            {data.map((restaurant,id) => {
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
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadRestaurantEvent:()=>{
            dispatch({type :"loadRestaurantEvent"});
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewRestaurant);

