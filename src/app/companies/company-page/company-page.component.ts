import { lastValueFrom } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CompanyService } from 'src/app/services/company.service';
import { Company } from 'src/app/model/company';

@Component({
  selector: 'app-company-page',
  templateUrl: './company-page.component.html',
  styleUrls: ['./company-page.component.css']
})
export class CompanyPageComponent implements OnInit {
  companyId: string = '';
  companyDetails: Company = new Company('', '', '', '', '', '', '', '');
  companyForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private companyService: CompanyService,
    private router: Router,
    private fb: FormBuilder
  ) { 
    this.companyForm = this.fb.group({
      businessName: ['', [Validators.required, Validators.minLength(3)]],
      status: ['', [Validators.required]],
      name: ['', [Validators.required, Validators.minLength(3)]],
      cnpj: ['', [Validators.required, Validators.minLength(18), Validators.maxLength(18)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      cep: ['', [Validators.required, Validators.pattern('^[0-9]{5}-[0-9]{3}$')]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
  });
  }

  formatCnpj(cnpj: string) {
    cnpj = cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    return cnpj;
  }
  onCnpjInput(event: any) {
    const inputCnpj = event.target.value;
    const formattedCnpj = this.formatCnpj(inputCnpj);
    this.companyForm.get('cnpj')?.setValue(formattedCnpj, { emitEvent: false });
  }

  formatPhone(phone: string) {
    phone = phone.replace(/(\d{2})(\d)(\d{4})(\d{4})/, '($1) $2 $3-$4');
    return phone;
  }
  onPhoneInput(event: any) {
    const inputPhone = event.target.value;
    const formattedPhone = this.formatPhone(inputPhone);
    this.companyForm.get('phone')?.setValue(formattedPhone, { emitEvent: false });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.companyId = params.get('id') || '';
      this.loadCompanyDetails();
    });
  }

  async loadCompanyDetails() {
    try {
      this.companyDetails = await lastValueFrom(this.companyService.getCompanyDetails(this.companyId));
      this.companyForm.patchValue({
        businessName: this.companyDetails.businessName,
        status: this.companyDetails.status,
        cnpj: this.companyDetails.cnpj,
        name: this.companyDetails.name,
        email: this.companyDetails.email,
        phone: this.companyDetails.phone,
        cep: this.companyDetails.cep,
        city: this.companyDetails.city,
        state: this.companyDetails.state
      });
    } catch (error) {
      console.error('Erro ao carregar detalhes da empresa', error);
    }
  }

  async submit() {
    try {
      if (this.companyForm.valid) {
        const updatedCompanyData = this.companyForm.value;
        await lastValueFrom(this.companyService.updateCompany(this.companyId, updatedCompanyData));
        this.router.navigate(['/empresas']);
      } else {

      }
    } catch (error) {
      console.error('Erro ao atualizar empresa', error);
    }
  }
}