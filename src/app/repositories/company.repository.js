class CompanyRepository{
    /*@ngInject*/
    constructor(AuthService,$firebaseObject,$firebaseArray,UserRepository){
        this.AuthService = AuthService;
        this.$fbObject = $firebaseObject;
        this.$fbArray = $firebaseArray;
        this.UserRepository = UserRepository;
    }
    createCompany(company){
        let companyRef = this.$fbObject(this.AuthService.baseRef.child('company/'+this.AuthService.getUserId()));
        return companyRef.$loaded().then(()=>{
            company.members=[this.AuthService.getUserId()];
            Object.assign(companyRef,company);
            companyRef.$save();
            return companyRef;
        });
    }
    getCompany(){
        var profile = this.UserRepository.getProfile();
        return profile.$loaded().then(()=>{
            return this.$fbObject(this.AuthService.baseRef.child('company/'+profile.companyId));
        });        
    }
    getEmployees(){
        return this.getCompany().then(company=>{
            return company.$loaded().then(()=>company.members.map(id=>this.UserRepository.getUser(id)));
        });
    }
}

export default CompanyRepository;