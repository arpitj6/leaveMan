import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CallService } from './call.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MockService {
  public headers = new HttpHeaders().set('content-type', 'application/json');

  constructor(private http: HttpClient, private service: CallService) {}
  public getUserData() {
    let path = `http://localhost:3000/users`;
    return this.service.callMethod('get', null, path);
  }
  public getLeaveData() {
    let path = `http://localhost:3000/leaves`;
    return this.service.callMethod('get', null, path);
  }

  public deleteUser(id: any) {
    let path = `http://localhost:3000/users/${id}`;
    return this.service.callMethod('delete', null, path);
  }

  public deleteLeave(id: any) {
    let path = `http://localhost:3000/leaves/${id}`;
    return this.service.callMethod('delete', null, path);
  }
  public addUser(user: any) {
    let path = `http://localhost:3000/users/`;
    return this.service.callMethod('post', user, path);
  }
  public addLeave(leave: any) {
    let path = `http://localhost:3000/leaves/`;
    return this.service.callMethod('post', leave, path);
  }

  public getHodData() {
    let path = `http://localhost:3000/hods`;
    return this.service.callMethod('get', null, path);
  }

  public addHod(hod: any) {
    let path = `http://localhost:3000/hods`;
    return this.service.callMethod('post', hod, path);
  }
  public changeLeaveData(leave: any) {
    let path = `http://localhost:3000/leaves/${leave?.id}`;
    return this.service.callMethod('put', leave, path);
  }
  public changeUserData(user: any) {
    let path = `http://localhost:3000/users/${user?.id}`;
    return this.service.callMethod('put', user, path);
  }
}
