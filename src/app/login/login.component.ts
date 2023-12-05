import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;
  formWarning: string | null = null;

  disableButton: boolean = true;

  isLogged: boolean = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("user")) {
      this.router.navigate(['/']);
    }
    
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  get email() {
    return this.loginForm.get('email')!;
  }
  get password() {
    return this.loginForm.get('password')!;
  }

  handleFormChange() {
    this.disableButton = this.loginForm.invalid;
  }

  async submit() { 
    const userEmail = this.loginForm.get('email')?.value;
    const userPass = this.loginForm.get('password')?.value;

    try {
      const response = await lastValueFrom(this.userService.getUserByEmail(userEmail));

      if(response.length > 0) {
        const user = response[0];

        if(userPass === user.password) {
          this.isLogged = true;

          this.formWarning = null;

          sessionStorage.setItem("user", user.email);
          this.router.navigate(['/']);
        } else {
          this.formWarning = 'Email ou senha incorretos. Tente novamente.';
        }
      }
    } catch (error) {
      console.error('Erro ao adicionar empresa', error);
    }
  }
}
