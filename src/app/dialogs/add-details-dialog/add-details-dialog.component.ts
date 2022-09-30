import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MockService } from 'src/app/services/mock.service';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-details-dialog',
  templateUrl: './add-details-dialog.component.html',
  styleUrls: ['./add-details-dialog.component.css'],
})
export class AddDetailsDialogComponent implements OnInit {
  public Subscription$: Subscription = new Subscription();
  userObj = JSON.parse(JSON.stringify(user));
  leaveObj = JSON.parse(JSON.stringify(leave));
  public departments = ['Phy', 'Chem', 'Bio'];
  public userData: any;
  public currentUser: any;

  constructor(
    private dialogRef: MatDialogRef<AddDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: MockService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.service.getUserData().subscribe((res: any) => {
      if (res) {
        this.userData = res;
        this.currentUser = this.userData.filter(
          (item: any) => item.username == this.data.username
        );
      }
    });
  }
  close() {
    this.dialogRef.close();
  }
  validate() {
    if (this.data.action == 'staff') {
      if (!this.leaveObj.from) {
        this.snackBar.open('Please enter from date to proceed', 'OK', {
          duration: 2000,
        });
        return false;
      }
      if (!this.leaveObj.to) {
        this.snackBar.open('Please enter to date to proceed', 'OK', {
          duration: 2000,
        });
        return false;
      }
      if (!this.leaveObj.reason) {
        this.snackBar.open('Please enter reason to proceed', 'OK', {
          duration: 2000,
        });
        return false;
      }
      if (this.currentUser[0].availableLeaves < 1) {
        this.snackBar.open('You Dont have enough leaves to Apply!', 'OK', {
          duration: 2000,
        });
        return false;
      }
      return true;
    }
    if ((this.data.action = 'hod')) {
      if (!this.userObj.name) {
        this.snackBar.open('Please enter name to proceed', 'OK', {
          duration: 2000,
        });
        return false;
      }
      if (!this.userObj.username) {
        this.snackBar.open('Please enter username to proceed', 'OK', {
          duration: 2000,
        });
        return false;
      }
      if (!this.userObj.email) {
        this.snackBar.open('Please enter email to proceed', 'OK', {
          duration: 2000,
        });
        return false;
      }
      if (!this.userObj.mobile) {
        this.snackBar.open('Please enter mobile to proceed', 'OK', {
          duration: 2000,
        });
        return false;
      }
      if (!this.userObj.dept) {
        this.snackBar.open('Please enter department to proceed', 'OK', {
          duration: 2000,
        });
        return false;
      }
      if (!this.userObj.password) {
        this.snackBar.open('Please enter password to proceed', 'OK', {
          duration: 2000,
        });
        return false;
      }
      if (this.userObj.username) {
        let isUserExists: any = false;
        this.userData.map((item: any) => {
          if (item.username == this.userObj.username) {
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
    return true;
  }
  add() {
    // apply leave
    if (this.data.action == 'staff') {
      if (this.validate()) {
        this.leaveObj.username = this.data.username;
        this.leaveObj.status = 'Pending';
        this.Subscription$.add(
          this.service.addLeave(this.leaveObj).subscribe((res: any) => {
            if (res) {
              this.currentUser[0].availableLeaves -= 1;
              this.service.changeUserData(this.currentUser[0]).subscribe();
              this.dialogRef.close(this.leaveObj);
            }
          })
        );
      }
    }
    // add member
    if (this.data.action == 'hod') {
      if (this.validate()) {
        this.Subscription$.add(
          this.service.addUser(this.userObj).subscribe((res: any) => {
            if (res) {
              this.dialogRef.close(this.userObj);
            }
          })
        );
      }
      // add member here
    }
  }
}
const user = {
  name: null,
  username: null,
  email: null,
  mobile: null,
  dept: null,
  password: null,
};
const leave = {
  from: null,
  to: null,
  reason: null,
  username: null,
};
