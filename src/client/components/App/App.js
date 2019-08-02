import React from 'react';
import './App.scss';
import Gallery from '../Gallery';
import {connect} from 'react-redux';
import AppActions from './actions';
import GalleryActions from '../Gallery/actions';
import {Button} from 'primereact/button';
import {Dropdown} from 'primereact/dropdown';
import SignUp from "../SignUp/SignUp";
import SignIn from "../SignIn/SignIn";
//import Dashboard from "../HomePage/HomePage";
import Restaurant from "../Restaurant/Restaurant";
import ViewRestaurant from "../ViewRestaurant/ViewRestaurant";
import {Redirect, Link, Route, Switch} from "react-router-dom";
import CreateReview from "../CreateReview/CreateReview";
import CardActions from "@material-ui/core/CardActions";
import SearchUsers from "../SearchUsers/SearchUsers";
import HomePage from "../HomePage/HomePage";


class App extends React.Component {

    render() {
        return (
            <div className="app-root">
                {/*<div className="app-header">*/}
                {/*</div>*/}

                <nav className="navbar navbar">
                    <ul className="nav">
                        <li>
                            <Link to="/SignUp">SignUp</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path="/SignIn" component={SignIn}/>
                    <Route exact path="/SignUp" component={SignUp}/>
                    <Route exact path="/Home" component={HomePage}/>
                </Switch>
                {/*<HomePage/>*/}
                {/*<CreateReview*/}
                {/*    username={this.props.username}*/}
                {/*    name={this.props.name}*/}
                {/*/>*/}
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadTagsEventHandler: () => {
            dispatch(AppActions.loadTagsAction());
        },
        updateTagEventHandler: (e) => {
            dispatch(AppActions.updateTagAction(e.value));
        },
        loadImagesEventHandler: (tag) => {
            dispatch(GalleryActions.loadImagesAction(tag))
        }
    }
};

//export default App
export default connect(mapStateToProps, mapDispatchToProps)(App);
