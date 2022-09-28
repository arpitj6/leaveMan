import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddDetailsDialogComponent } from '../add-details-dialog/add-details-dialog.component';

@Component({
  selector: 'app-view-details-dialog',
  templateUrl: './view-details-dialog.component.html',
  styleUrls: ['./view-details-dialog.component.css'],
})
export class ViewDetailsDialogComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<AddDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}
  close() {
    this.dialogRef.close();
  }
  delete(){
    
  }
}
