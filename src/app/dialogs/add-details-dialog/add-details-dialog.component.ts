import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MockService } from 'src/app/services/mock.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-details-dialog',
  templateUrl: './add-details-dialog.component.html',
  styleUrls: ['./add-details-dialog.component.css'],
})
export class AddDetailsDialogComponent implements OnInit {
  userObj = JSON.parse(JSON.stringify(user));
  leaveObj = JSON.parse(JSON.stringify(leave));
  public Subscription$: Subscription = new Subscription();

  constructor(
    private dialogRef: MatDialogRef<AddDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: MockService
  ) {}

  ngOnInit(): void {}
  close() {
    this.dialogRef.close();
  }
  add() {
    if (this.data == 'staff') {
      this.Subscription$.add(
        this.service.addLeave(this.leaveObj).subscribe((res) => {
          this.dialogRef.close(this.leaveObj);
        })
      );
      // apply leave here
    }
    if (this.data == 'hod') {
      // add member here
      this.Subscription$.add(
        this.service.addLeave(this.userObj).subscribe((res) => {
          this.dialogRef.close(this.userObj);
        })
      );
    }
  }
}
const user = {
  name: null,
  username: null,
  email: null,
  mobile: null,
};
const leave = {
  from: null,
  to: null,
  reason: null,
};
