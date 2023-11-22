import { Component, Input, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-companies-page',
  templateUrl: './companies-page.component.html',
  styleUrls: ['./companies-page.component.css']
})
export class CompaniesPageComponent implements OnInit {
  companies: any[] = [];
  searchTerm: string = '';

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.loadCompanies();
  }

  async loadCompanies() {
    try {
      const companies = await lastValueFrom(this.companyService.getCompanies());
      this.sortCompaniesByName(companies);
      if (this.searchTerm.trim() !== '') {
        this.companies = companies.filter(company => 
          company.businessName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          company.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          company.cnpj.includes(this.searchTerm) ||
          company.phone.includes(this.searchTerm) ||
          company.city.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          company.state.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          (company.status ? 'Ativa' : 'Inativa').toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      } else {
        this.sortCompaniesByName(this.companies);
      }
    } catch (error) {
      console.error('Erro ao carregar empresas', error);
    }
  }

  sortCompaniesByName(companies: any[]) {
    this.companies = companies.sort((a, b) => a.businessName.localeCompare(b.businessName));
  }
}