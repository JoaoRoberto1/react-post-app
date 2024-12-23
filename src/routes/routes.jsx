import React from 'react'
import { Home } from '../pages/home/Home'
import Post from '../pages/Post/Post'
import { Contato } from '../pages/contato/Contato'
import { Sobre } from '../pages/sobre/Sobre'

export const routes = [
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/post',
        element: <Post />
    },
    {
        path: '/contato',
        element: <Contato />
    },
    {
        path: '/sobre',
        element: <Sobre />,
    }
]