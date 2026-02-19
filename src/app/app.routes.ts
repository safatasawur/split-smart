import { signal } from '@angular/core';
import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { retry } from 'rxjs';

export const routes: Routes = [
    {path:'verifypage',
        loadComponent:()=> {
            return import('./verifypg/verifypage/verifypage').then((m)=>m.Verifypage)
        },
    },
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
    },
    {path:'creategroup',
    loadComponent:()=>{
        return import('./autho/groupform/groupform').then((m)=>m.Groupform)
        }
    }
];
