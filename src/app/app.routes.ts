import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: '',
        loadComponent: () => import('./app').then(el => el.App)
    },
    {
        path: 'home',
        loadComponent: () => import('./home/home').then(resp => resp.Home)
    },
    {
        path: 'main',
        loadComponent: () => import('./main/main').then(resp => resp.Main)
    },
    {
        path: "**"
        , loadComponent: () => import('./error/error').then(resp => resp.Error)
    },
];
