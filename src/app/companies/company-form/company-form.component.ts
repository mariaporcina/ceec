import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CompanyService } from 'src/app/services/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.css']
})

export class CompanyFormComponent implements OnInit {
  @Input() btnText!: string;
  @Input() companyDetails: any;

  newCompanyForm!: FormGroup;
  formWarning: string = '';

  constructor(private companyService: CompanyService, private router: Router,) { }

  formatCnpj(cnpj: string) {
    cnpj = cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    return cnpj;
  }
  onCnpjInput(event: any) {
    const inputCnpj = event.target.value;
    const formattedCnpj = this.formatCnpj(inputCnpj);
    this.newCompanyForm.get('cnpj')?.setValue(formattedCnpj, { emitEvent: false });
  }

  formatPhone(phone: string) {
    phone = phone.replace(/(\d{2})(\d)(\d{4})(\d{4})/, '($1) $2 $3-$4');
    return phone;
  }
  onPhoneInput(event: any) {
    const inputPhone = event.target.value;
    const formattedPhone = this.formatPhone(inputPhone);
    this.newCompanyForm.get('phone')?.setValue(formattedPhone, { emitEvent: false });
  }

  async onCepInput(event: any) {
    const inputCep = event.target.value;

    if(inputCep.length === 9) {
      const cleanCep = inputCep.replace(/-/, '');
      const url = new URL(`https://viacep.com.br/ws/${cleanCep}/json/`);
      
      try {
        const response = await fetch(url);
        const result = await response.json();

        this.newCompanyForm.get('city')?.setValue(result.localidade, { emitEvent: false });
        this.newCompanyForm.get('state')?.setValue(result.uf, { emitEvent: false });
      } catch (error) {
        console.error(error);
      }
    }
  }

  ngOnInit(): void {
    this.newCompanyForm = new FormGroup({
      businessName: new FormControl(''),
      cnpj: new FormControl(''),
      name: new FormControl(''),
      phone: new FormControl(''),
      cep: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      email: new FormControl(''),
      status: new FormControl(''),
    });
  }

  clearForm() {
    this.newCompanyForm.reset();
  }
  
  get businessName() {
    return this.newCompanyForm.get('businessName')!;
  }
  get cnpj() {
    return this.newCompanyForm.get('cnpj')!;
  }
  get name() {
    return this.newCompanyForm.get('name')!;
  }
  get phone() {
    return this.newCompanyForm.get('phone')!;
  }
  get cep() {
    return this.newCompanyForm.get('cep')!;
  }
  get city() {
    return this.newCompanyForm.get('city')!;
  }
  get state() {
    return this.newCompanyForm.get('state')!;
  }
  get email() {
    return this.newCompanyForm.get('email')!;
  }
  get status() {
    return this.newCompanyForm.get('status')!;
  }

  async submit() { 
    if (this.newCompanyForm.invalid) {
      this.formWarning = "Por favor, preencha todos os campos corretamente.";
      return;
    }
    this.formWarning = "";
    this.router.navigate(['/empresas']);
    const companyData = this.newCompanyForm.value;

    try {
      const response = await this.companyService.addCompany(companyData);
      console.log('Empresa adicionada com sucesso', response);
    } catch (error) {
      console.error('Erro ao adicionar empresa', error);
    }
  }
}
