import angular from 'angular';
import angularfire from 'angularfire';

import services from '../services/services';


import CompanyRepository from './company.repository';
import UserRepository from './user.repository';

const repositories = angular.module("repositories",[services,angularfire])
    .service('CompanyRepository',CompanyRepository)
    .service('UserRepository',UserRepository)
    .name;

export default repositories;