import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AddDetailsDialogComponent } from '../dialogs/add-details-dialog/add-details-dialog.component';
import { ViewDetailsDialogComponent } from '../dialogs/view-details-dialog/view-details-dialog.component';

@Component({
  selector: 'app-hod-view',
  templateUrl: './hod-view.component.html',
  styleUrls: ['./hod-view.component.css'],
})
export class HodViewComponent implements OnInit {
  public leavesData: any = JSON.parse(JSON.stringify(leaves));
  public userData: any = JSON.parse(JSON.stringify(users));
  public searchKey: any;
  public user: any;
  public filteredUsers: any = [];
  public filteredLeaves: any = [];
  public pageEvent: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((res) => {
      this.user = res['data'];
    });
    this.filteredUsers = this.userData.slice(0, 5);
    this.filteredLeaves = this.leavesData.slice(0, 5);
  }
  onPaginateChange(data: any, action: any) {
    if (action == 'staff') {
      this.filteredUsers = this.userData.slice(
        data.pageIndex * data.pageSize,
        data.pageIndex * data.pageSize + data.pageSize
      );
    }
    if (action == 'leave') {
      this.filteredLeaves = this.leavesData.slice(
        data.pageIndex * data.pageSize,
        data.pageIndex * data.pageSize + data.pageSize
      );
    }
  }
  apply() {
    const d = this.dialog.open(AddDetailsDialogComponent, {
      maxHeight: '100vh',
      maxWidth: '100vw',
      data: 'hod',
    });
  }

  logOut() {
    this.router.navigate(['login']);
  }
  tabChanged() {
    this.searchKey = '';
  }

  viewDetails(action: any, item: any) {
    const d = this.dialog.open(ViewDetailsDialogComponent, {
      maxHeight: '100vh',
      maxWidth: '100vw',
      data: {
        action: action,
        actionFor: 'hod',
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
    reason: 'not well',
    status: 'pending',
  },
  {
    sNo: 7,
    from: '01/02/2022',
    to: '01/02/2022',
    reason: 'not well',
    status: 'Pending',
  },
];
const users = [
  {
    name: 'Arpit',
    username: 'arpitj6',
    email: 'arpitj6@gmail.com',
    mobile: '9999851985',
  },
  {
    name: 'karan',
    username: 'arpitj6',
    email: 'arpitj6@gmail.com',
    mobile: '9999851985',
  },
  {
    name: 'yash',
    username: 'arpitj6',
    email: 'arpitj6@gmail.com',
    mobile: '9999851985',
  },
  {
    name: 'Rishabh',
    username: 'arpitj6',
    email: 'arpitj6@gmail.com',
    mobile: '9999851985',
  },
  {
    name: 'Shivam',
    username: 'arpitj6',
    email: 'arpitj6@gmail.com',
    mobile: '9999851985',
  },
  {
    name: 'Prerit',
    username: 'arpitj6',
    email: 'arpitj6@gmail.com',
    mobile: '9999851985',
  },
  {
    name: 'Rohan',
    username: 'arpitj6',
    email: 'arpitj6@gmail.com',
    mobile: '9999851985',
  },
  {
    name: 'Sonu',
    username: 'arpitj6',
    email: 'arpitj6@gmail.com',
    mobile: '9999851985',
  },
  {
    name: 'Kaku',
    username: 'arpitj6',
    email: 'arpitj6@gmail.com',
    mobile: '9999851985',
  },
  {
    name: 'Mannu',
    username: 'arpitj6',
    email: 'arpitj6@gmail.com',
    mobile: '9999851985',
  },
  {
    name: 'Shravan',
    username: 'arpitj6',
    email: 'arpitj6@gmail.com',
    mobile: '9999851985',
  },
  {
    name: 'Goldy',
    username: 'arpitj6',
    email: 'arpitj6@gmail.com',
    mobile: '9999851985',
  },
];