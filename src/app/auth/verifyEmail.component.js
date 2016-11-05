class VerifyEmailController{
    $onInit(){
        this.clicked=false;
    }
    resendEmail(){
        this.user.sendEmailVerification();
        this.clicked=true;
    }
} 

const VerifyEmailComponent = {
    template:require("./verifyEmail.template.html"),
    controller:VerifyEmailController,
    bindings:{
        user:'<'
    }
};

export default VerifyEmailComponent;