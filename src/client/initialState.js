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
    location: "Tel Aviv",
    description: "McDonald's is an American fast food company, founded in 1940 as a restaurant operated by Richard and Maurice McDonald",
    picture: null,
    reviews: [review3, review1, review2, review2, review1]
}, {
    name: "Mcdonalds",
    location: "BeerSheva",
    description: "McDonald's is an American fast food company, founded in 1940 as a restaurant operated by Richard and Maurice McDonald",
    picture: null,
    reviews: [review2, review1, review2]
}, {
    name: "Mcdonalds",
    location: "RamtGan",
    description: "McDonald's is an American fast food company, founded in 1940 as a restaurant operated by Richard and Maurice McDonald",
    picture: null,
    reviews: [review1]
}, {
    name: "aaaa",
    location: "RamtGan",
    description: "McDonald's is an American fast food company, founded in 1940 as a restaurant operated by Richard and Maurice McDonald",
    picture: null,
    reviews: [review1]
}];

const cities =  [
    {name: 'RamtGan'},
    {name: 'Rome'},
    {name: 'Tel Aviv'},
    {name: 'BeerSheva'},
    {name: 'Istanbul'},
    {name: 'Paris'}];


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
        locations: [
            { label: 'New York', value: 'NY' },
            { label: 'Rome', value: 'RM' },
            { label: 'London', value: 'LDN' },
            { label: 'Istanbul', value: 'IST' },
            { label: 'Paris', value: 'PRS' }
        ],
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
        searchValue: '',
        sort: 'default',
        backup: List(data),
        locations: cities,
        searchLocationValue: ''
    })
};
