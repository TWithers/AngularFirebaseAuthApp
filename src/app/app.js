import angular from 'angular';
import ngMaterial from 'angular-material';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import uiRouter from 'angular-ui-router';


import services from './services/services';

import toolbar from "./toolbar/toolbar.component";
import auth from "./auth/index";
import dashboard from "./dashboard/index";


/*@ngInject*/
const root = angular.module('my-app', [
    ngMaterial,
    ngAnimate,
    ngAria,
    uiRouter,
    toolbar,
    auth,
    services,
    dashboard

]).config(($locationProvider,$urlRouterProvider,$mdThemingProvider)=>{
    'ngInject';
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise("/");
    $mdThemingProvider.theme('default')
        .primaryPalette('blue',{default:'A700'})
        .accentPalette('green')
        .warnPalette('red');
})
.name;

export default root;