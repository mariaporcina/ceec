import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-my-user',
  templateUrl: './my-user.component.html',
  styleUrls: ['./my-user.component.css']
})
export class MyUserComponent {
  userForm: FormGroup;
  loggedUser: string | null = null;
  userDetails: any;

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

  ngOnInit(): void {
    this.loggedUser = sessionStorage.getItem("user");
    this.loadUserDetails();
  }

  async loadUserDetails() {
    try {
      console.log(this.loggedUser)
      this.userDetails = await lastValueFrom(this.userService.getUserByEmail(this.loggedUser));
      console.log(this.userDetails);

      this.userForm.patchValue({
        userName: this.userDetails[0].userName,
        cpf: this.userDetails[0].cpf,
        email: this.userDetails[0].email,
        phone: this.userDetails[0].phone
      });
    } catch (error) {
      console.error('Erro ao carregar dados do usuário', error);
    }
  }

  async submit() {
    try {
      if (this.userForm.valid) {
        const updatedCompanyData = this.userForm.value;
        await lastValueFrom(this.userService.updateUser(this.userDetails[0].id, updatedCompanyData));
        this.router.navigate(['/']);
      }
    } catch (error) {
      console.error('Erro ao atualizar usuario', error);
    }
  }
}
