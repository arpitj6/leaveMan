import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AddDetailsDialogComponent } from '../dialogs/add-details-dialog/add-details-dialog.component';
import { ViewDetailsDialogComponent } from '../dialogs/view-details-dialog/view-details-dialog.component';
import { MockService } from '../services/mock.service';
import { sharedModule } from '../shared.module';

@Component({
  selector: 'app-staff-view',
  templateUrl: './staff-view.component.html',
  styleUrls: ['./staff-view.component.css'],
  standalone: true,
  imports: [sharedModule],
})
export class StaffViewComponent implements OnInit {
  public leavesData: any;
  public searchKey: any;
  public user: any;
  public filteredLeaves: any = [];
  public pageEvent: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
    public service: MockService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((res) => {
      this.user = res['data'];
    });
    this.service.getLeaveData().subscribe((res: any) => {
      if (res) {
        this.leavesData = res;
        this.filteredLeaves = this.leavesData.slice(0, 5);
      }
    });
  }
  onPaginateChange(data: any) {
    this.filteredLeaves = this.leavesData.slice(
      data.pageIndex * data.pageSize,
      data.pageIndex * data.pageSize + data.pageSize
    );
  }
  apply(action: any) {
    const d = this.dialog.open(AddDetailsDialogComponent, {
      maxHeight: '100vh',
      maxWidth: '100vw',
      data: action,
    });
    d.afterClosed().subscribe((res) => {
      if (res) {
        this.leavesData.push(res);
      }
    });
  }

  logOut() {
    this.router.navigate(['login']);
  }

  viewDetails(action: any, item: any) {
    const d = this.dialog.open(ViewDetailsDialogComponent, {
      maxHeight: '100vh',
      maxWidth: '100vw',
      data: {
        action: action,
        actionFor: 'staff',
        data: item,
      },
    });
  }
}
