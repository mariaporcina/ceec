import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  loggedUser: string = '';
  userEmail: string | null = '';

  constructor(private userService: UserService) { }

  async ngOnInit() {
    this.loggedUser = await this.getLoggedUser();
  }
  
  async getLoggedUser() {
    if(sessionStorage.getItem("user")) {
      this.userEmail = sessionStorage.getItem("user");

      try {
        const response = await lastValueFrom(this.userService.getUserByEmail(this.userEmail));

        return response[0].userName;
      } catch (error) {
        console.error(error);
      }
    }
  }
}
