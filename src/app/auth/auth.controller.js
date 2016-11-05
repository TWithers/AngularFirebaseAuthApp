class AuthController{
    /*@ngInject*/
    constructor(AuthService,$state){
        this.auth = AuthService.auth;
        // this.$state = $state;
    }

    $onInit(){
        this.user = {
            email:'',
            password:'',
            displayName:'',
            password_confirm:''
        };
        this.errorMessages={
            "auth/invalid-email":"The email address isn't properly formatted.",
            "auth/user-disabled":"The user account has been disabled.",
            "auth/user-not-found":"The email address does not exist in the system.",
            "auth/wrong-password":"The email/password combination is incorrect.",
            "auth/email-already-in-use":"An account already exists with this email. Please try logging in or use Forgot Password.",
            "auth/operation-not-allowed":"Account sign ups are disabled. Please contact the website administrator.",
            "auth/weak-password":"The password is too weak. Please type something more than 6 characters in length.",
        };
        this.formSubmitted=false;
    }

    forgotPassword(){
        this.auth.$sendPasswordResetEmail(this.user.email).then(()=>this.formSubmitted=true,error=>this.error=error);
    }
    login(){
        this.auth.$signInWithEmailAndPassword(this.user.email,this.user.password).then(auth=>$state.go('home'),error=>this.error=error);
    }
    register(){
        if(this.user.password!==this.user.password_confirm){
            return alert('Please make sure passwords match!');
        }
        this.auth.$createUserWithEmailAndPassword(this.user.email,this.user.password).then(user=>{
            user.updateProfile({
                displayName:this.user.displayName
            });
            user.sendEmailVerification();
            this.login();
        },error=>this.error=error);
    }

}
export default AuthController;