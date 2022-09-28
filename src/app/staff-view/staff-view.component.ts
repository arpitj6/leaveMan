import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AddDetailsDialogComponent } from '../dialogs/add-details-dialog/add-details-dialog.component';
import { ViewDetailsDialogComponent } from '../dialogs/view-details-dialog/view-details-dialog.component';

@Component({
  selector: 'app-staff-view',
  templateUrl: './staff-view.component.html',
  styleUrls: ['./staff-view.component.css'],
})
export class StaffViewComponent implements OnInit {
  public leavesData: any = JSON.parse(JSON.stringify(leaves));
  public searchKey: any;
  public user: any;
  public filteredLeaves: any = [];
  public pageEvent: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((res) => {
      console.log(res);
      this.user = res['data'];
    });
    this.filteredLeaves = this.leavesData.slice(0, 5);
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
const leaves = [
  {
    sNo: 1,
    from: '01/02/2022',
    to: '02/02/2022',
    reason: 'Sick',
    status: 'Approved',
  },
  {
    sNo: 2,
    from: '01/02/2022',
    to: '04/02/2022',
    reason: 'Sick',
    status: 'Rejected',
  },
  {
    sNo: 3,
    from: '01/02/2022',
    to: '02/02/2022',
    reason: 'family function',
    status: 'Pending',
  },
  {
    sNo: 4,
    from: '01/02/2022',
    to: '07/02/2022',
    reason: 'Vacation',
    status: 'Pending',
  },
  {
    sNo: 5,
    from: '01/02/2022',
    to: '01/02/2022',
    reason: 'Sick',
    status: 'Approved',
  },
  {
    sNo: 6,
    from: '01/02/2022',
    to: '01/02/2022',
    reason: 'not Well',
    status: 'Approved',
  },
];
