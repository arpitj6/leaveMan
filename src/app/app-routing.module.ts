import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HodViewComponent } from './hod-view/hod-view.component';
import { LoginViewComponent } from './login-view/login-view.component';
import { AuthGuard } from './services/auth.guard';
import { StaffViewComponent } from './staff-view/staff-view.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginViewComponent },
  { path: 'staff', component: StaffViewComponent, canActivate: [AuthGuard] },
  { path: 'hod', component: HodViewComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
