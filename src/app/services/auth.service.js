import * as firebase from 'firebase';
class AuthService{
    /*@ngInject*/
    constructor($firebaseAuth,$state,$q){
        this.baseAuth = firebase.auth;
        this.auth = $firebaseAuth(firebase.auth());
        this.$state = $state;
        this.$q=$q;
    }
    requireAuth(){
        return this.auth.$requireSignIn();
    }

}

export default AuthService;