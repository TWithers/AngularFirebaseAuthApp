class CompanyRepository{
    /*@ngInject*/
    constructor(AuthService,$firebaseObject,$firebaseArray,UserRepository){
        this.AuthService = AuthService;
        this.$fbObject = $firebaseObject;
        this.$fbArray = $firebaseArray;
        this.UserRepository = UserRepository;
    }
    
    createCompany(company){
        return this.$fbArray(this.AuthService.baseRef.child('company')).$add(company).then(ref=>ref.key);
    }
    getCompany(){
        var profile = this.UserRepository.getProfile();
        return profile.$loaded().then(()=>{
            return this.$fbObject(this.AuthService.baseRef.child('company/'+profile.companyId));
        })
        
    }
}

export default CompanyRepository;