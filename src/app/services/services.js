import angular from "angular";
import uiRouter from "angular-ui-router";
import angularfire from 'angularfire';

import AuthService from './auth.service';

const services = angular.module('services',[angularfire])
    .service('AuthService',AuthService)
    .name;

export default services;