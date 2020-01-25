var config = {
    style: 'mapbox://styles/nickmccarty/ck5rbwmxj00f61in3ixl3vtp1/draft',
    accessToken: 'pk.eyJ1Ijoibmlja21jY2FydHkiLCJhIjoiY2pxemppMDZoMGJxeDQ0dDJ5OWxhcXA3dCJ9.k6cGbYHEbY2UDT-D6chFbw',
//     showMarkers: false,
    theme: 'light',
    alignment: 'left',
    title: 'The Effect of Housing Policy on Housing Supply in San Francisco',
    subtitle: "An Analysis Conducted by Code for SF's",
    byline: 'Data Science Working Group',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'slug-style-id',
            title: 'Display Title',
            image: 'image/12-10-2019.jpeg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [-122.506, 37.775],
                zoom: 11.45,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'other-identifier',
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-77.020636, 38.886900],
                zoom: 13.5,
                pitch: 60,
                bearing: -43.2
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
