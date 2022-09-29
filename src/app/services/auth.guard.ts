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
import { MockService } from './mock.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  public username: any;
  public password: any;
  public designation: any;
  public userData: any;
  public hodData: any;
  constructor(
    private service: AuthService,
    private router: Router,
    private mService: MockService
  ) {
    this.mService.getUserData().subscribe((res: any) => {
      this.userData = res;
    });
    this.mService.getHodData().subscribe((res: any) => {
      this.hodData = res;
    });
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.service.username$.subscribe((res) => {
      this.username = res;
    });
    this.service.username$.subscribe((res) => {
      this.password = res;
    });
    this.service.designation$.subscribe((res) => {
      this.designation = res;
    });
    if (this.designation == 'staff') {
    }
    if (this.username) {
      let isUserPresent = false;
      if (this.designation == 'staff') {
        this.userData?.map((item: any) => {
          if (
            item.username == this.username &&
            item.password == this.password
          ) {
            isUserPresent = true;
          }
        });
      }
      if (this.designation == 'hod') {
        this.hodData?.map((item: any) => {
          if (
            item.username == this.username &&
            item.password == this.password
          ) {
            isUserPresent = true;
          }
        });
      }

      if (isUserPresent) {
        return true;
      } else {
        return false;
      }
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
