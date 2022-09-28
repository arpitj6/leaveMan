import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RegisterComponent } from '../register/register.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css'],
})
export class LoginViewComponent implements OnInit {
  public designation: any;
  public username: any;
  public password: any;

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private _router: Router,
    private service: AuthService
  ) {}

  ngOnInit(): void {}

  login() {
    if (this.validate()) {
      this.service.username$.next(this.username);
      this.service.password$.next(this.password);

      if (this.designation == 'staff') {
        this._router.navigate(['staff'], {
          queryParams: {
            action: 'staff',
            data: this.username,
          },
        });
      }
      if (this.designation == 'hod') {
        this._router.navigate(['hod'], {
          queryParams: {
            action: 'hod',
            data: this.username,
          },
        });
      }
    }
  }
  validate() {
    if (!this.username) {
      this.snackBar.open('Please enter Username', 'OK', {
        duration: 2000,
      });
      return false;
    }
    if (!this.password) {
      this.snackBar.open('Please enter Password', 'OK', {
        duration: 2000,
      });
      return false;
    }
    if (!this.designation) {
      this.snackBar.open('Please select designation', 'OK', {
        duration: 2000,
      });
      return false;
    }

    return true;
  }
  registerUser() {
    if (this.designation) {
      const d = this.dialog.open(RegisterComponent, {
        maxHeight: '100vh',
        maxWidth: '100vw',
        data: this.designation,
      });
    } else {
      this.snackBar.open('Please select designation', 'OK', {
        duration: 2000,
      });
    }
  }
}
