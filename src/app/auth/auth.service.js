import * as firebase from 'firebase';
class AuthService{
    /*@ngInject*/
    constructor($firebaseAuth){
        this.auth = $firebaseAuth(firebase.auth());
    }

}

export default AuthService;