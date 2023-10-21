import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-companies-page',
  templateUrl: './companies-page.component.html',
  styleUrls: ['./companies-page.component.css', '../../app.component.css']
})
export class CompaniesPageComponent {
  companyCorporateName: string = "";

  showName() {
    if(this.companyCorporateName === "") {
      this.companyCorporateName = "Sport Clube Corinthians";
    } else {
      this.companyCorporateName = "";
    }
  }
}