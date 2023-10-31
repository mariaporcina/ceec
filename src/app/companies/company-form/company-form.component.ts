import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.css']
})
export class CompanyFormComponent {
  newCompanyForm = new FormGroup({
    businessName: new FormControl(''),
    cnpj: new FormControl(''),
    name: new FormControl(''),
    phone: new FormControl(''),
    cep: new FormControl(''),
    email: new FormControl(''),
    status: new FormControl(''),
  });

  formWarning: string = '';

  onSubmit() {
    // TODO: Use EventEmitter with form value
    // console.warn(this.newCompanyForm.value);
  }

  validateInput($event: Event) {
    const input = $event.target as Element;
    if((input as HTMLInputElement).validity.valid) {
      this.formWarning = "";
    } else {
      this.formWarning = "Digite um CNPJ válido.";
    }
  }
}
