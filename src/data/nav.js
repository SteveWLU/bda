//This file contains the links and names for each link in the nav bar, if you want to add another page, 
//add it into this variable and then go to App.js and more comments will be there
export const nav = [
    {
        title: "About",
        dropdown: [
            {
                page: "Collaborators",
                url: "/about/collaborators"
            },
            {
                page: "Bibliography",
                url: "/about/bibliography"
            },
            {
                page: "Source Code",
                url: "https://github.com/SteveWLU/bda"
            },
            {
                page: "Technical Notes",
                url: "/about/technical"
            },
        ]
    },
    {
        title: "Library",
        dropdown: [
            {
                page: "Guerrino Meschino",
                url: "/guerrino"
            },
            {
                page: "Restoro d'Arezzo",
                url: "/restoro"
            },
        ]
    },
]