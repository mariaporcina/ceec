import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  async addUser(userData: any): Promise<any> {
    try {
      const response = await lastValueFrom(this.http.post(this.apiUrl, userData));
      return response;
    } catch (error) {
      throw error;
    }
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getUserById(userId: string): Observable<any> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.get<any>(url);
  }

  getUserByEmail(userEmail: string | null): Observable<any> {
    const url = `${this.apiUrl}/?email=${userEmail}`;
    return this.http.get<any>(url);
  }

  updateUser(userId: string, updatedData: any): Observable<any> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.put<any>(url, updatedData);
  }

  deleteUser(userId: string): Observable<any> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.delete<any>(url);
  }
}
