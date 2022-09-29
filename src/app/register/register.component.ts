import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MockService } from '../services/mock.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public dept: any;
  public departments = ['Phy', 'Chem', 'Bio'];
  public staffObj = JSON.parse(JSON.stringify(staff));
  public hodObj = JSON.parse(JSON.stringify(hod));
  public userData: any;
  public hodData: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<RegisterComponent>,
    private snackBar: MatSnackBar,
    private service: MockService
  ) {
    console.log(data);
  }
  ngOnInit(): void {
    this.service.getUserData().subscribe((res: any) => {
      if (res) {
        this.userData = res;
      }
    });
    this.service.getHodData().subscribe((res: any) => {
      if (res) {
        this.hodData = res;
      }
    });
  }

  close() {
    this.dialogRef.close();
  }

  register() {
    if (this.data == 'staff') {
      if (this.validate()) {
        this.service.addUser(this.staffObj).subscribe((res: any) => {
          if (res) {
            this.dialogRef.close(res);
          }
        });
      }
    }
    if (this.data == 'hod') {
      if (this.validate()) {
        this.service.addHod(this.hodObj).subscribe((res: any) => {
          if (res) {
            this.dialogRef.close(res);
          }
        });
      }
    }
  }

  validate() {
    if (this.data == 'staff') {
      if (!this.staffObj.name) {
        this.snackBar.open('Please enter name to proceed', 'OK', {
          duration: 2000,
        });
        return false;
      }
      if (!this.staffObj.username) {
        this.snackBar.open('Please enter username to proceed', 'OK', {
          duration: 2000,
        });
        return false;
      }
      if (!this.staffObj.email) {
        this.snackBar.open('Please enter email to proceed', 'OK', {
          duration: 2000,
        });
        return false;
      }
      if (!this.staffObj.mobile) {
        this.snackBar.open('Please enter mobile to proceed', 'OK', {
          duration: 2000,
        });
        return false;
      }
      if (!this.staffObj.dept) {
        this.snackBar.open('Please enter department to proceed', 'OK', {
          duration: 2000,
        });
        return false;
      }
      if (!this.staffObj.password) {
        this.snackBar.open('Please enter password to proceed', 'OK', {
          duration: 2000,
        });
        return false;
      }
      if (this.staffObj.username) {
        let isUserExists: any = false;
        this.userData.map((item: any) => {
          if (item.username == this.staffObj.username) {
            this.snackBar.open('Username already exists', 'OK', {
              duration: 2000,
            });
            isUserExists = true;
          }
        });
        if (isUserExists) {
          return false;
        } else {
          return true;
        }
      }

      return true;
    }

    // hod validations
    if (this.data == 'hod') {
      if (!this.hodObj.name) {
        this.snackBar.open('Please enter name to proceed', 'OK', {
          duration: 2000,
        });
        return false;
      }
      if (!this.hodObj.username) {
        this.snackBar.open('Please enter username to proceed', 'OK', {
          duration: 2000,
        });
        return false;
      }
      if (!this.hodObj.email) {
        this.snackBar.open('Please enter email to proceed', 'OK', {
          duration: 2000,
        });
        return false;
      }
      if (!this.hodObj.mobile) {
        this.snackBar.open('Please enter mobile to proceed', 'OK', {
          duration: 2000,
        });
        return false;
      }
      if (!this.hodObj.dept) {
        this.snackBar.open('Please enter department to proceed', 'OK', {
          duration: 2000,
        });
        return false;
      }
      if (!this.hodObj.password) {
        this.snackBar.open('Please enter password to proceed', 'OK', {
          duration: 2000,
        });
        return false;
      }
      if (this.hodObj.username) {
        let isHodExists: any = false;
        this.hodData.map((item: any) => {
          if (item.username == this.hodObj.username) {
            this.snackBar.open('Username already exists', 'OK', {
              duration: 2000,
            });
            isHodExists = true;
          }
        });
        if (isHodExists) {
          return false;
        } else {
          return true;
        }
      }
      return true;
    }
    return true;
  }
}
const staff = {
  name: null,
  username: null,
  email: null,
  mobile: null,
  dept: null,
  password: null,
};

const hod = {
  name: null,
  username: null,
  email: null,
  mobile: null,
  dept: null,
  password: null,
};
