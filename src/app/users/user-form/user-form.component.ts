import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  @Input() btnText!: string;

  newUserForm!: FormGroup;
  formWarning: string = '';

  constructor(private userService: UserService) { }

  formatCpf(cpf: string) {
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    return cpf;
  }
  onCpfInput(event: any) {
    const inputCpf = event.target.value;
    const formattedCnpj = this.formatCpf(inputCpf);
    this.newUserForm.get('cpf')?.setValue(formattedCnpj, { emitEvent: false });
  }

  formatPhone(phone: string) {
    phone = phone.replace(/(\d{2})(\d)(\d{4})(\d{4})/, '($1) $2 $3-$4');
    return phone;
  }
  onPhoneInput(event: any) {
    const inputPhone = event.target.value;
    const formattedPhone = this.formatPhone(inputPhone);
    this.newUserForm.get('phone')?.setValue(formattedPhone, { emitEvent: false });
  }

  passwordMatch: boolean | undefined;

  ngOnInit(): void {
    this.newUserForm = new FormGroup({
      userName: new FormControl(''),
      cpf: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      password: new FormControl(''),
      confPassword: new FormControl(''),
    });
  }

  get userName() {
    return this.newUserForm.get('userName')!;
  }
  get cpf() {
    return this.newUserForm.get('cpf')!;
  }
  get email() {
    return this.newUserForm.get('email')!;
  }
  get phone() {
    return this.newUserForm.get('phone')!;
  }
  get password() {
    return this.newUserForm.get('password')!;
  }
  get confPassword() {
    return this.newUserForm.get('confPassword')!;
  }

  checkPasswordMatch() {
    const password = this.newUserForm.get('password')?.value;
    const confPassword = this.newUserForm.get('confPassword')?.value;

    this.passwordMatch = password === confPassword;

    if (!this.passwordMatch) {
      this.confPassword?.setErrors({ 'incorrect': true });
    } else {
      this.confPassword?.setErrors(null);
    }
  }

  async submit() { 
    if (this.newUserForm.invalid) {
      this.formWarning = "Por favor, preencha todos os campos corretamente.";
      return;
    }
    
    this.formWarning = "";

    const userData = this.newUserForm.value;

    try {
      const response = await this.userService.addUser(userData);
      console.log('Usuário adicionado com sucesso', response);
      //TODO
      // Limpar o formulário
    } catch (error) {
      console.error('Erro ao adicionar usuário', error);
    }
  }
}
