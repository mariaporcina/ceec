import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent {
  companyCorporateName: string = "";

  showName() {
    if(this.companyCorporateName === "") {
      this.companyCorporateName = "Sport Clube Corinthians";
    } else {
      this.companyCorporateName = "";
    }
  }
}