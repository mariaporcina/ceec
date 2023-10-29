import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.css']
})
export class CompanyFormComponent implements OnInit {
  @Input() btnText!: string;

  companyForm!: FormGroup;


  constructor() { }

  ngOnInit(): void {
    this.companyForm = new FormGroup({
      id: new FormControl(''),
      businessName: new FormControl('', [Validators.required]),
      cnpj: new FormControl('', [Validators.required]),
      fantasia: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      cep: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
    });
  }

  get businessName() {
    return this.companyForm.get('businessName')!;
  }
  get cnpj() {
    return this.companyForm.get('cnpj')!;
  }
  get fantasia() {
    return this.companyForm.get('fantasia')!;
  }
  get phone() {
    return this.companyForm.get('phone')!;
  }
  get cep() {
    return this.companyForm.get('cep')!;
  }
  get city() {
    return this.companyForm.get('city')!;
  }
  get state() {
    return this.companyForm.get('state')!;
  }
  get email() {
    return this.companyForm.get('email')!;
  }
  get status() {
    return this.companyForm.get('status')!;
  }

  submit() { 
    if (this.companyForm.invalid) {
      return;
    }
    console.log('Enviou Formulário');
  }
}
