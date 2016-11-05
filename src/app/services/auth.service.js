import * as firebase from 'firebase';
class AuthService{
    /*@ngInject*/
    constructor($firebaseAuth,$state){
        this.auth = $firebaseAuth(firebase.auth());
        this.$state = $state;
    }
    requireAuth(){
        let firebaseUser = this.auth.$getAuth();
        if (firebaseUser) {
            return firebaseUser;
        } else {
            return this.$state.go('login');
        }
    }

}

export default AuthService;