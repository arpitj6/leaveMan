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

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<RegisterComponent>,
    private snackBar: MatSnackBar,
    private service: MockService
  ) {
    console.log(data);
  }

  close() {
    this.dialogRef.close();
  }

  register() {
    if (this.data == 'staff') {
      this.service.addUser(this.staffObj).subscribe((res) => {
        if (res) {
          this.dialogRef.close(res);
        }
      });
    }
    if (this.data == 'hod') {
      this.service.addHod(this.hodObj).subscribe((res) => {
        if (res) {
          this.dialogRef.close(res);
        }
      });
    }
  }

  ngOnInit(): void {}
}
const staff = {
  name: null,
  username: null,
  email: null,
  mobile: null,
};

const hod = {
  name: null,
  username: null,
  email: null,
  mobile: null,
  dept: null,
  password: null,
};
