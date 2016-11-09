class DashboardController{
    /*@ngInject*/
    constructor(CompanyRepository){
        this.CompanyRepository = CompanyRepository;
    }
    $onInit(){
        this.CompanyRepository.getCompany().then(data=>this.company = data);
        this.CompanyRepository.getEmployees().then(data=>this.employees = data);
    }
}

export default DashboardController;