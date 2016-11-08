class ToolbarController{
    /*@ngInject*/
    constructor(AuthService){
        this.auth = AuthService.auth;
    }
    $onInit(){
        this.user = this.auth.$getAuth();
        this.auth.$onAuthStateChanged(auth=>{console.log(auth);this.user = auth});
    }
    openMenu($mdOpenMenu, ev) {
        let originatorEv = ev;
        $mdOpenMenu(ev);
    }
}
export default ToolbarController;