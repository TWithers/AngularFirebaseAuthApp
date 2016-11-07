import angular from 'angular';
import ngMaterial from 'angular-material';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import uiRouter from 'angular-ui-router';
import uiRouterStateEvents from 'angular-ui-router/release/stateEvents';


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
    dashboard,
    'ui.router.state.events'

]).config(($locationProvider,$urlRouterProvider,$mdThemingProvider)=>{
    'ngInject';
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise("/");
    $mdThemingProvider.theme('default')
        .primaryPalette('blue',{default:'A700'})
        .accentPalette('green')
        .warnPalette('red');
}).run(($rootScope,$state,AuthService)=>{
    'ngInject';
    // AuthService.auth.$onAuthStateChanged(auth=>console.log(auth));
    $rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams, error) {
        if (error === "AUTH_REQUIRED") {
            $state.go("login");
        }
    });
})
.name;

export default root;