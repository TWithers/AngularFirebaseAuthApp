import angular from "angular";
import uiRouter from "angular-ui-router";

import DashboardComponent from "./dashboard.component";


/*@ngInject*/
const dashboard = angular
    .module("app.dashboard",[uiRouter])
    .component('dashboardComponent',DashboardComponent)
    .config(($stateProvider)=>{
        'ngInject';
        $stateProvider
            .state('dashboard',{
                url:'/home',
                component:'dashboardComponent',
                resolve:{
                    user:(AuthService)=>{
                        console.log(AuthService.requireAuth());
                        return AuthService.requireAuth();
                    }
                }
            });
            
    })
    .name;

export default dashboard;