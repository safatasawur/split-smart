import { signal } from '@angular/core';
import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';

export const routes: Routes = [
    {
        path: "dashboard",
        loadComponent:()=> {
            return import('./dashboard/dashboard').then((m)=>m.Dashboard)
        },
    },
    {
        path:"login",
        loadComponent:()=> {
            return import('./autho/login/login').then((m)=>m.Login)
        },
    },
    {
        path:'register',
        loadComponent:()=>{
          return import('./autho/signup/signup').then((m)=>m.Signup)
        }
    },
    {
        path:'',
        pathMatch:"full",
        loadComponent:()=>{
            return import('./autho/login/login').then((m)=>m.Login)
        }
    }
];
