import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public dept: any;
  public departments = ['Phy', 'Chem', 'Bio'];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<RegisterComponent>,
    private snackBar: MatSnackBar
  ) {
    console.log(data);
  }

  close() {
    this.dialogRef.close();
  }

  register() {}

  ngOnInit(): void {}
}
