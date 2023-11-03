import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.css']
})

export class CompanyFormComponent implements OnInit {
  @Input() btnText!: string;

  newCompanyForm!: FormGroup;
  formWarning: string = '';

  constructor() { }

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

  submit() { 
    if (this.newCompanyForm.invalid) {
      this.formWarning = "Por favor, preencha todos os campos corretamente.";
      return;
    }
    this.formWarning = "";
  }
}
