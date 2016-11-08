import angular from "angular";
import uiRouter from "angular-ui-router";

import ForgotPasswordComponent from "./forgotPassword.component";
import LoginComponent from "./login.component";
import RegisterComponent from './register.component';
import VerifyEmailComponent from './verifyEmail.component';

import './auth.style.css';


/*@ngInject*/
const auth = angular
    .module("app.auth",[uiRouter])
    .component('loginComponent',LoginComponent)
    .component('registerComponent',RegisterComponent)
    .component('forgotPasswordComponent',ForgotPasswordComponent)
    .component('verifyEmailComponent',VerifyEmailComponent)
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
            })
            .state('verifyEmail',{
                url:'/verifyEmail',
                component:'verifyEmailComponent',
                resolve:{
                    user:(AuthService)=>{
                        // 'ngInject';
                        return AuthService.requireAuth();
                    }
                }
            }).state('logout',{
                url:'/logout',
                template:'<div>Logout</div>',
                controller:(AuthService,$state)=>{
                    // 'ngInject';
                    AuthService.baseAuth().signOut().then(()=>$state.go('login'));
                }
            });
            
    })
    .name;

export default auth;