import DashboardController from "./dashboard.controller";

const DashboardComponent = {
    template:require("./dashboard.template.html"),
    controller:DashboardController,
    bindings:{
        user:'<'
    }

};

export default DashboardComponent;