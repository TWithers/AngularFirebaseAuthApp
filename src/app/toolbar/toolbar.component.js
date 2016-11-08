import angular from "angular";

import ToolbarController from './toolbar.controller'; 
/*@ngInject*/
const toolbar = angular.module("app.toolbar",[])
    .component("toolbar",{
        template:require("./toolbar.component.html"),
        controller:ToolbarController
    }).name;

export default toolbar;