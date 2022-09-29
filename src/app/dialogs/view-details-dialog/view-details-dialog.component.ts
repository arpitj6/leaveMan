import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MockService } from 'src/app/services/mock.service';
import { AddDetailsDialogComponent } from '../add-details-dialog/add-details-dialog.component';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-view-details-dialog',
  templateUrl: './view-details-dialog.component.html',
  styleUrls: ['./view-details-dialog.component.css'],
})
export class ViewDetailsDialogComponent implements OnInit, OnDestroy {
  public Subscription$: Subscription = new Subscription();
  constructor(
    private dialogRef: MatDialogRef<AddDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: MockService
  ) {
    console.log(data);
  }

  ngOnInit(): void {}
  close() {
    this.dialogRef.close();
  }
  delete() {
    this.Subscription$.add(
      this.service.deleteUser(this.data.data.id).subscribe((res: any) => {
        if (res) {
          this.dialogRef.close(this.data.data.id);
        }
      })
    );
  }
  ngOnDestroy(): void {
    this.Subscription$.unsubscribe();
  }
}
