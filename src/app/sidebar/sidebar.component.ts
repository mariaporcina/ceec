import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent {
  isActive = '';

  handleMenu($event: MouseEvent) {
    const button = $event.currentTarget as Element;
    const icon = button.children[0] as Element;

    if(button.classList.contains('opened')) {
      this.isActive = '';
      icon.classList.remove('fa-times');
      button.classList.remove('opened');
    } else {
      this.isActive = 'activeMenu';
      icon.classList.add('fa-times');
      button.classList.add('opened');
    }
  }
}
