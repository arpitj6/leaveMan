import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  public username: any;
  public password: any;
  constructor(private service: AuthService, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.service.username$.subscribe((res) => {
      this.username = res;
    });
    this.service.username$.subscribe((res) => {
      this.password = res;
    });
    if (
      (this.username == 'staff' && this.password == 'staff') ||
      (this.username == 'hod' && this.password == 'hod')
    ) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
