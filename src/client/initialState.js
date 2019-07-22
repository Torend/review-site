const {List, Map} = require('immutable');

const review1 = {
    name: "dani",
    date: "12.3.2019",
    desc: "bla bla bla bla bla bla",
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
    desc: "kkkkkkkkkkkkk",
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
    desc: "bhhhhhhhhhhhhhhhh",
    average: 3,
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
    reviews: [review3, review1, review2]
}, {
    name: "Mcdonalds",
    location: "beerSheva",
    description: "McDonald's is an American fast food company, founded in 1940 as a restaurant operated by Richard and Maurice McDonald",
    reviews: [review2, review1, review2]
}, {
    name: "Mcdonalds",
    location: "ramtGan",
    description: "McDonald's is an American fast food company, founded in 1940 as a restaurant operated by Richard and Maurice McDonald",
    reviews: [review1]
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
        restaurants: List(data),
    })
};
