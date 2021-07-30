import React from 'react'
import * as GiIcons from 'react-icons/gi'

// cName - abbreviation for className

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <GiIcons.GiCastle size={30}/>,
        cName: 'nav-text'
    },
    {
        title: 'About',
        path: '/about',
        icon: <GiIcons.GiCompass size={30}/>,
        cName: 'nav-text'
    },
    {
        title: 'Collaborators',
        path: '/collaborators',
        icon: <GiIcons.GiBattleGear size={30}/>,
        cName: 'nav-text'
    },
    {
        title: 'Merchants',
        path: '/merchants',
        icon: <GiIcons.GiCaravel size={30}/>,
        cName: 'nav-text'
    },
    {
        title: 'Library',
        path: '/library',
        icon: <GiIcons.GiRat size={30}/>,
        cName: 'nav-text'
    },
    {
        title: 'Guerrino',
        path: '/guerrino',
        icon: <GiIcons.GiMountedKnight size={30}/>,
        cName: 'nav-text'
    },
    {
        title: 'Bibliography',
        path: '/bibliography',
        icon: <GiIcons.GiSpellBook size={30}/>,
        cName: 'nav-text'
    },
]

