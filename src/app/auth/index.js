import angular from "angular";
import uiRouter from "angular-ui-router";
import angularfire from 'angularfire';

import ForgotPasswordComponent from "./forgotPassword.component";
import LoginComponent from "./login.component";
import RegisterComponent from './register.component';
import AuthService from "./auth.service";

import './auth.style.css';


/*@ngInject*/
const auth = angular
    .module("app.auth",[uiRouter,angularfire])
    .service('AuthService',AuthService)
    .component('loginComponent',LoginComponent)
    .component('registerComponent',RegisterComponent)
    .component('forgotPasswordComponent',ForgotPasswordComponent)
    .config(($stateProvider)=>{
        'ngInject';
        $stateProvider
            .state('login', {
                url: '/login',
                component:'loginComponent'
            })
            .state('register',{
                url:'/register',
                component:'registerComponent'
            })
            .state('forgotPassword',{
                url:'/forgot',
                component:'forgotPasswordComponent'
            });
            
    })
    .name;

export default auth;