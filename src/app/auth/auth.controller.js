class AuthController{
    /*@ngInject*/
    constructor(AuthService,$state){
        this.auth = AuthService.auth;
        this.baseAuth = AuthService.baseAuth;
        this.$state = $state;
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
            "auth/argument-error":"One of the fields was not filled out correctly.  Please try again.",
            "register/password-mismatch":"The passwords do not match. Please correct the mistake and try again."
        };
        this.formSubmitted=false;
    }

    forgotPassword(){
        try{
            this.submitting=true;
            this.auth.$sendPasswordResetEmail(this.user.email).then(()=>this.formSubmitted=true,error=>{
                this.error=error;
                this.submitting=false;
            });
        }catch(e){
            this.submitting=false;
            this.error=e;
            console.log(e);
        }
    }
    login(){
        try{
            this.submitting=true;
            this.auth.$signInWithEmailAndPassword(this.user.email,this.user.password).then(auth=>{
                if(auth.emailVerified){
                    this.$state.go('dashboard');
                }else{
                    this.$state.go('verifyEmail');
                }
            },error=>{
                this.error=error;
                this.submitting=false;
            });
        }catch(e){
            this.submitting=false;
            this.error=e;
            console.log(e);
        }
    }
    register(){
        if(this.user.password!==this.user.password_confirm){
            this.error={code:'register/password-mismatch'};
            return false;
        }
        try{
            this.submitting=true;
            this.auth.$createUserWithEmailAndPassword(this.user.email,this.user.password).then(user=>{
                user.updateProfile({
                    displayName:this.user.displayName
                });
                user.sendEmailVerification();
                this.login();
            },error=>{
                this.error=error;
                this.submitting=false;
            });
        }catch(e){
            this.submitting=false;
            this.error=e;
            console.log(e);
        }
    }

}
export default AuthController;