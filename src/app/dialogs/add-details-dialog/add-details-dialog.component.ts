import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-details-dialog',
  templateUrl: './add-details-dialog.component.html',
  styleUrls: ['./add-details-dialog.component.css'],
})
export class AddDetailsDialogComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<AddDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log(data);
  }

  ngOnInit(): void {}
  close() {
    this.dialogRef.close();
  }
  add() {
    if (this.data == 'staff') {
      // apply leave here
    }
    if (this.data == 'hod') {
      // add member here
    }
  }
}
