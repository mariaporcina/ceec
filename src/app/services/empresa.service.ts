import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private apiUrl = 'http://localhost:3000/companies';

  constructor(private http: HttpClient) { }

  async addCompany(companyData: any): Promise<any> {
    try {
      const response = await lastValueFrom(this.http.post(this.apiUrl, companyData));
      return response;
    } catch (error) {
      throw error;
    }
  }
}
