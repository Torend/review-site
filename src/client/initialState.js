const { List, Map } = require('immutable');

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
    })
};
