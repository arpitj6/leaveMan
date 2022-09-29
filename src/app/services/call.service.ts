import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CallService {
  public headers = new HttpHeaders().set('content-type', 'application/json');
  constructor(private http: HttpClient) {}

  public callMethod(method: string, body: any = null, path: string): any {
    if (method == 'get') {
      return this.http.get(path);
    }
    if (method == 'post') {
      return this.http.post(path, body, { headers: this.headers });
    }
    if (method == 'put') {
      return this.http.put(path, body, { headers: this.headers });
    }
    if (method == 'delete') {
      return this.http.delete(path);
    }
  }
}
