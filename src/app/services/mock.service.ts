import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MockService {
  public headers = new HttpHeaders().set('content-type', 'application/json');

  constructor(private http: HttpClient) {}
  public getUserData() {
    return this.http.get('http://localhost:3000/users');
  }
  public getLeaveData() {
    return this.http.get('http://localhost:3000/leaves');
  }

  public deleteUser(id: any) {
    return this.http.delete(`http://localhost:3000/users/${id}`);
  }
  public addUser(user: any) {
    return this.http.post(`http://localhost:3000/users/`, user, {
      headers: this.headers,
    });
  }
  public addLeave(leave: any) {
    return this.http.post(`http://localhost:3000/users/`, leave, {
      headers: this.headers,
    });
  }

  public getHodData() {
    return this.http.get('http://localhost:3000/hods');
  }

  public addHod(hod: any) {
    return this.http.post(`http://localhost:3000/hods`, hod, {
      headers: this.headers,
    });
  }
}
{
}
