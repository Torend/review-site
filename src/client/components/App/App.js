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

const review ={
    name: "Toren",
    date: "12.3.2019",
    desc: "bla bla bla bla bla bla",
    average: 4,
    r1: 4,
    r2: 2,
    r3: 4,
    r4: 5,
    r5: 3,
    r6: 4,
};

class App extends React.Component {
    componentDidMount() {
        this.props.loadTagsEventHandler();
    }

    render() {
        console.log('tags=', this.props.tags);
        return (
            <div className="app-root">
                <ViewRestaurant/>
                <Review
                 value={review}
                />
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
