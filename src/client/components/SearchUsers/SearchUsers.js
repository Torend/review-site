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
                            <InputText id="in" value={this.props.searchValue} onChange={this.props.filterUsersByName}/>
                        </div>
                    </Toolbar>
                    <ListItem alignItems="flex-start">
                        <Typography>
                            {this.props.users.map((user) => {
                                return <ViewUser
                                    key={user.id}
                                    name={user.username}
                                    location={user.location}
                                    picture={user.picture}
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
        users: state['searchUsers'].get('users'),
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadUsersEvent:() =>{
            dispatch({type: 'loadUsers'})
        },
        filterUsersByName:(e)=>{
            dispatch({type: 'filterUsersByName', value: e.target.value})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchUsers);
