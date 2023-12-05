import { lastValueFrom } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  userId: string = '';
  userDetails: any;
  userForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder
  ) { 
    this.userForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      cpf: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      password: ['', [Validators.required]],
      confPassword: ['', [Validators.required]],
    });
  }

  formatCpf(cpf: string) {
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    return cpf;
  }
  onCpfInput(event: any) {
    const inputCpf = event.target.value;
    const formattedCnpj = this.formatCpf(inputCpf);
    this.userForm.get('cpf')?.setValue(formattedCnpj, { emitEvent: false });
  }

  formatPhone(phone: string) {
    phone = phone.replace(/(\d{2})(\d)(\d{4})(\d{4})/, '($1) $2 $3-$4');
    return phone;
  }
  onPhoneInput(event: any) {
    const inputPhone = event.target.value;
    const formattedPhone = this.formatPhone(inputPhone);
    this.userForm.get('phone')?.setValue(formattedPhone, { emitEvent: false });
  }

  passwordMatch: boolean | undefined;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.userId = params.get('id') || '';
      this.loadUserDetails();
    });
  }

  async loadUserDetails() {
    try {
      this.userDetails = await lastValueFrom(this.userService.getUserById(this.userId));
      this.userForm.patchValue({
        userName: this.userDetails.userName,
        cpf: this.userDetails.cpf,
        email: this.userDetails.email,
        phone: this.userDetails.phone,
        password: this.userDetails.password,
        confPassword: this.userDetails.confPassword
      });
    } catch (error) {
      console.error('Erro', error);
    }
  }

  get confPassword() {
    return this.userForm.get('confPassword')!;
  }

  checkPasswordMatch() {
    const password = this.userForm.get('password')?.value;
    const confPassword = this.userForm.get('confPassword')?.value;

    this.passwordMatch = password === confPassword;

    if (!this.passwordMatch) {
      this.confPassword?.setErrors({ 'incorrect': true });
    } else {
      this.confPassword?.setErrors(null);
    }
  }

  async handleDeleteUser() {
    try {
      await lastValueFrom(this.userService.deleteUser(this.userId));
      this.router.navigate(['/usuarios']);
    } catch (error) {
      console.error('Erro ao deletar usuário', error);
    }
  }

  async submit() {
    try {
      if (this.userForm.valid) {
        const updatedUserData = this.userForm.value;
        await lastValueFrom(this.userService.updateUser(this.userId, updatedUserData));
        this.router.navigate(['/usuarios']);
      }
    } catch (error) {
      console.error('Erro ao atualizar empresa', error);
    }
  }
}
