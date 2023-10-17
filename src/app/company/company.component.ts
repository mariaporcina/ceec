import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Company } from '../model/company';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent {
  company!: Company;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void  {
    const companyId = this.route.snapshot.paramMap.get('id')!;
    this.company = new Company('Sport Clube Corinthians', 'Corinthians', '121231230000112', 'scc@gmail.com', '00000000', 'São Paulo', 'São Paulo');
    this.company.id = companyId;
  }
}
