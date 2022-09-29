import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AddDetailsDialogComponent } from '../dialogs/add-details-dialog/add-details-dialog.component';
import { ViewDetailsDialogComponent } from '../dialogs/view-details-dialog/view-details-dialog.component';
import { MockService } from '../services/mock.service';
import { sharedModule } from '../shared.module';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hod-view',
  templateUrl: './hod-view.component.html',
  styleUrls: ['./hod-view.component.css'],
  standalone: true,
  imports: [sharedModule],
})
export class HodViewComponent implements OnInit {
  public Subscription$: Subscription = new Subscription();
  public leavesData: any = [];
  public userData: any = [];
  public searchKey: any;
  public user: any;
  public filteredUsers: any = [];
  public filteredLeaves: any = [];
  public pageEvent: any;
  public userCount: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private service: MockService
  ) {}

  ngOnInit() {
    this.Subscription$.add(
      this.route.queryParams.subscribe((res) => {
        this.user = res['data'];
      })
    );
    this.Subscription$.add(
      this.service.getUserData().subscribe((res: any) => {
        this.userData = res;
        this.userCount = this.userData?.length;
      })
    );
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
  apply(action: any) {
    const d = this.dialog.open(AddDetailsDialogComponent, {
      maxHeight: '100vh',
      maxWidth: '100vw',
      data: {
        action: 'hod',
        username: this.user,
      },
    });
    d.afterClosed().subscribe((res) => {
      if (res) {
        this.userData.push(res);
      }
    });
  }

  logOut() {
    this.router.navigate(['login']);
  }
  tabChanged(event: any) {
    if (event.index == 2) {
      this.Subscription$.add(
        this.service.getUserData().subscribe((res: any) => {
          this.userData = res;
          this.filteredUsers = this.userData.slice(0, 5);
        })
      );
    }
    if (event.index == 1) {
      this.Subscription$.add(
        this.service.getLeaveData().subscribe((res: any) => {
          this.leavesData = res;
          this.filteredLeaves = this.leavesData.slice(0, 5);
        })
      );
    }

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
    d.afterClosed().subscribe((res) => {
      if (action == 'delete') {
        let index = this.userData.findIndex((x: any) => x.id == res);
        let index2 = this.filteredUsers.findIndex((x: any) => x.id == res);
        this.userData.splice(index, 1);
        if (index2 != -1) {
          this.filteredUsers.splice(index2, 1);
        }
      }
    });
  }
}
// const leaves = [
//   {
//     id: 1,
//     from: '01/02/2022',
//     to: '02/02/2022',
//     reason: 'Sick',
//     status: 'Approved',
//   },
//   {
//     id: 2,
//     from: '01/02/2022',
//     to: '04/02/2022',
//     reason: 'Sick',
//     status: 'Rejected',
//   },
//   {
//     id: 3,
//     from: '01/02/2022',
//     to: '02/02/2022',
//     reason: 'family function',
//     status: 'Pending',
//   },
//   {
//     id: 4,
//     from: '01/02/2022',
//     to: '07/02/2022',
//     reason: 'Vacation',
//     status: 'Pending',
//   },
//   {
//     id: 5,
//     from: '01/02/2022',
//     to: '01/02/2022',
//     reason: 'Sick',
//     status: 'Approved',
//   },
//   {
//     id: 6,
//     from: '01/02/2022',
//     to: '01/02/2022',
//     reason: 'not well',
//     status: 'pending',
//   },
//   {
//     id: 7,
//     from: '01/02/2022',
//     to: '01/02/2022',
//     reason: 'not well',
//     status: 'Pending',
//   },
// ];
// const users = [
//   {
//     name: 'Arpit',
//     username: 'arpitj6',
//     email: 'arpitj6@gmail.com',
//     mobile: '9999851985',
//   },
//   {
//     name: 'karan',
//     username: 'arpitj6',
//     email: 'arpitj6@gmail.com',
//     mobile: '9999851985',
//   },
//   {
//     name: 'yash',
//     username: 'arpitj6',
//     email: 'arpitj6@gmail.com',
//     mobile: '9999851985',
//   },
//   {
//     name: 'Rishabh',
//     username: 'arpitj6',
//     email: 'arpitj6@gmail.com',
//     mobile: '9999851985',
//   },
//   {
//     name: 'Shivam',
//     username: 'arpitj6',
//     email: 'arpitj6@gmail.com',
//     mobile: '9999851985',
//   },
//   {
//     name: 'Prerit',
//     username: 'arpitj6',
//     email: 'arpitj6@gmail.com',
//     mobile: '9999851985',
//   },
//   {
//     name: 'Rohan',
//     username: 'arpitj6',
//     email: 'arpitj6@gmail.com',
//     mobile: '9999851985',
//   },
//   {
//     name: 'Sonu',
//     username: 'arpitj6',
//     email: 'arpitj6@gmail.com',
//     mobile: '9999851985',
//   },
//   {
//     name: 'Kaku',
//     username: 'arpitj6',
//     email: 'arpitj6@gmail.com',
//     mobile: '9999851985',
//   },
//   {
//     name: 'Mannu',
//     username: 'arpitj6',
//     email: 'arpitj6@gmail.com',
//     mobile: '9999851985',
//   },
//   {
//     name: 'Shravan',
//     username: 'arpitj6',
//     email: 'arpitj6@gmail.com',
//     mobile: '9999851985',
//   },
//   {
//     name: 'Goldy',
//     username: 'arpitj6',
//     email: 'arpitj6@gmail.com',
//     mobile: '9999851985',
//   },
// ];
