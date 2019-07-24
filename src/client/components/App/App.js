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
import Restaurant from "../Restaurant/Restaurant";
import ViewRestaurant from "../ViewRestaurant/ViewRestaurant";
import Review from "../Reivew/Review";
import CreateRestaurant from "../CreateRestaurant/CreateRestaurant";


class App extends React.Component {
    componentDidMount() {
        this.props.loadTagsEventHandler();
    }

    render() {
        console.log('tags=', this.props.tags);
        return (
            <div className="app-root">
                <ViewRestaurant/>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        tag: state['app'].get('tag'),
        tags: state['app'].get('tags').toArray()
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
            console.log("fuckers");
            dispatch(GalleryActions.loadImagesAction(tag))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
