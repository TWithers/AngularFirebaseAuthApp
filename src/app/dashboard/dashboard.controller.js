class DashboardController{
    /*@ngInject*/
    constructor(CompanyRepository){
        this.CompanyRepository = CompanyRepository;
    }
    $onInit(){
        this.CompanyRepository.getCompany().then(data=>this.company = data);
    }
}

export default DashboardController;