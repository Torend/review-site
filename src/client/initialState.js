const {List, Map} = require('immutable');

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
        locations: List(),
        picture: null
    }),
    signIn: Map({
        username: ''
    }),
    // restaurant: Map({
    //     name: '',
    //     location: '',
    //     description: '',
    //     picture: null,
    //     reviews: List()
    // }),
    viewRestaurant:Map({
        restaurants: List(),
        sortBy:''
    })
};
