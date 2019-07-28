import {connect} from "react-redux";
import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import List from "@material-ui/core/List";
import {Toolbar} from "primereact/components/toolbar/Toolbar";
import {InputText} from "primereact/components/inputtext/InputText";
import ListItem from "@material-ui/core/ListItem";
import ViewUser from "../ViewUser/ViewUser";


export const classes = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const review1 = {
    name: "dani",
    date: "12.3.2019",
    restaurant: "bla bla bla bla bla bla",
    average: 4,
    r1: 4,
    r2: 4,
    r3: 4,
    r4: 5,
    r5: 5,
    r6: 4,
};

const review2 = {
    name: "alon",
    date: "12.3.2019",
    restaurant: "kkkkkkkkkkkkk",
    average: 2,
    r1: 2,
    r2: 2,
    r3: 4,
    r4: 2,
    r5: 2,
    r6: 1,
};

const review3 = {
    name: "kaki",
    date: "12.3.2019",
    restaurant: "bhhhhhhhhhhhhhhhh",
    average: 3,
    r1: 4,
    r2: 2,
    r3: 4,
    r4: 5,
    r5: 3,
    r6: 4,
};

const users = [{
    name: "kakai",
    location: 'Tel Aviv',
    picture: null,
    reviews: [review3, review1, review2, review2]
},{
    name: "aaaaa",
    location: 'Tel Aviv',
    picture: null,
    reviews: [review1, review2]
},{
    name: "bbbbbb",
    location: 'BeerSheva',
    picture: null,
    reviews: [review3]
}];

class SearchUsers extends Component {

    componentDidMount() {
        this.props.loadUsersEvent();
    }

    render() {
        return (
            <div>
                <List>
                    <Toolbar>
                        <div className="p-toolbar-group-right">
                            <label htmlFor="in">Search By Name </label>
                            <InputText id="in" value={this.props.searchValue} style={{marginRight: '.25em'}} onChange={this.props.filterUsersByName}/>
                        </div>
                    </Toolbar>
                    <ListItem alignItems="flex-start">
                        <Typography>
                            {users.map((user, id) => {  //TODO
                                return <ViewUser
                                    key={id}
                                    name={user.name}
                                    location={user.location}
                                    picture={user.picture}
                                    reviews={user.reviews}
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
        // users: state['searchUsers'].get('users'),
        // searchValue: state["searchUsers"].get('searchValue')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadUsersEvent:() =>{
            dispatch({type: 'loadUsersEvent'})
        },
        filterUsersByName:(e)=>{
            dispatch({type: 'filterUsersByName', value: e.target.value})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchUsers);
