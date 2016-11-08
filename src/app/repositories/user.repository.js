class UserRepository{
    /*@ngInject*/
    constructor(AuthService,$firebaseObject){
        this.AuthService = AuthService;
        this.$fbObject = $firebaseObject;
        try{
            this.connect()
            this.connected=true;
        }catch(e){
            this.connected=false;
        }
    }

    connect(){
        this.profile = this.$fbObject(this.AuthService.baseRef.child('user/'+this.AuthService.getUserId()));
    }

    createProfile(profile){
        if(!this.connected){
            this.connect();
        }
        return this.profile.$loaded().then(()=>{
            Object.assign(this.profile,profile);
            this.profile.$save();
            return this.profile;
        });
    }
    getProfile(){
        if(!this.connected){
            this.connect();
        }
        return this.profile;
    }
}

export default UserRepository;