import { Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { Component } from '@angular/core';
import { ProfesionalesComponent } from './pages/profesionales/profesionales.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        component: AboutUsComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    createRoute('professionals', ProfesionalesComponent),
    createRoute('**', NotFoundComponent)

];

function createRoute(path:string , component:any) {
    return {
        path, 
        component
    }
}; 
