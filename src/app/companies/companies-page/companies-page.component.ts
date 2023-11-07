import { Component, Input, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/empresa.service';
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
      this.companies = companies as any[]; // Ajuste o tipo conforme a estrutura dos dados
    } catch (error) {
      console.error('Erro ao carregar empresas', error);
    }
  }

  filterCompanies(): any[] {
    const term = this.searchTerm.toLowerCase();
    return this.companies.filter((company) =>
      company.businessName.toLowerCase().includes(term)
    );
  }
}