import * as firebase from 'firebase';
class AuthService{
    /*@ngInject*/
    constructor($firebaseAuth,$state,$q){
        this.baseAuth = firebase.auth;
        this.baseRef = firebase.database().ref();
        this.auth = $firebaseAuth(firebase.auth());
        this.$state = $state;
        this.$q=$q;
    }
    requireAuth(){
        return this.auth.$requireSignIn();
    }
    getUserId(){
        let user = this.auth.$getAuth();
        if(user){
            return user.uid;
        }else{
            throw {code:"auth/not-auth",message:"User not authenticated yet."};
        }

    }

}

export default AuthService;