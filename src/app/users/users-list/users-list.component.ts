import { lastValueFrom } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent  implements OnInit {
  users: any[] = [];
  searchTerm: string = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  async loadUsers() {
    try {
      const users = await lastValueFrom(this.userService.getUsers());
      if (this.searchTerm.trim() !== '') {
        this.users = users.filter(user => 
          user.userName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          user.email.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          user.cpf.includes(this.searchTerm) ||
          user.phone.includes(this.searchTerm)
        );
      } else {
        this.users = users;
      }
    } catch (error) {
      console.error('Erro ao carregar empresas', error);
    }
  }
}