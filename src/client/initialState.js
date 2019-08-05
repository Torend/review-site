const {List, Map} = require('immutable');


const cities = [
    {label: 'none', value: ''},
    {label: 'New York', value: 'New York', coordinates: [40.785091, -73.968285]},
    {label: 'Rome', value: 'Rome', coordinates: [41.890251, 12.492373]},
    {label: 'London', value: 'London', coordinates: [51.509865, -0.118092]},
    {label: 'Istanbul', value: 'Istanbul', coordinates: [ 41.015137, 28.979530]},
    {label: 'Paris', value: 'Paris', coordinates: [48.864716, 2.349014]},
    {label: 'Tel Aviv', value: 'Tel Aviv', coordinates: [32.109333, 34.855499]},
    {label: 'BeerSheva', value: 'BeerSheva', coordinates: [31.25181, 34.7913]},
    {label: 'RamtGan', value: 'RamtGan', coordinates: [32.08227, 34.81065]
    }];


export default {
    gallery: Map({
        images: List(),
        openLightBox: false,
        activeImage: 0,
        activeFilter: List(),
        galleryWidth: 0
    }),
    app: Map({
        size: 200,
        tag: 'art',
        tags: List()
    }),
    signUp: Map({
        username: '',
        location: '',
        locations: cities,
        picture: null
    }),
    signIn: Map({
        username: ''
    }),
    viewRestaurant: Map({
        restaurants: List(),
        searchValue: '',
        sort: 'default',
        backup: List(),
        locations: cities,
        searchLocationValue: ''
    }),
    createRestaurant: Map({
        name: '',
        description: '',
        location: '',
        locations: cities,
        picture: null
    }),
    searchUsers: Map({
        users: List(),
        backup: List(),
        searchValue:''
    }),
    viewProfile: Map({
        username: '',
        location: '',
        picture: null
    }),
    viewUser: Map({
        userReviews: List()
    }),
    restaurant: Map({
        restaurantReviews: List()
    }),
    viewUserReviews: Map({
        reviews: List()
    })
};
