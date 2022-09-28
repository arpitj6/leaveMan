import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  username$: BehaviorSubject<any> = new BehaviorSubject<any>('');
  password$: BehaviorSubject<any> = new BehaviorSubject<any>('');
  designation$: BehaviorSubject<any> = new BehaviorSubject<any>('');

  constructor() {}
}
