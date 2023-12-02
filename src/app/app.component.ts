import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'comp1contabilist';
  isLogged: boolean = false;

  constructor(private router: Router) {
    const events =
      router.events.pipe( 
        filter((event): event is NavigationEnd => event instanceof NavigationEnd)
      );
    
    events.subscribe((e: NavigationEnd) => {
      this.isLogged = sessionStorage.getItem("user") ? true : false;
    });
  }

  ngOnInit(): void {
    if(!sessionStorage.getItem("user")) {
      this.router.navigate(['/login']);
    }

    this.isLogged = sessionStorage.getItem("user") ? true : false;
  }
}
