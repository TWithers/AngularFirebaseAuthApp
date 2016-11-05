import angular from "angular";
/*@ngInject*/
const toolbar = angular.module("app.toolbar",[])
    .component("toolbar",{
        template:require("./toolbar.component.html"),
    }).name;

export default toolbar;