import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientInfoComponent } from './component/patient-info/patient-info.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import {PatientSummaryComponent} from './component/patient-summary/patient-summary.component';
import { MyAccountComponent } from './component/my-account/my-account.component';
import { LoginComponent } from './component/login/login.component';
import { MyProfileComponent } from './component/my-account/my-profile/my-profile.component';
import { MyPinComponent } from './component/my-account/my-pin/my-pin.component';
import { ChangePasswordComponent } from './component/my-account/change-password/change-password.component';
import { ChangeSecurityQuestionsComponent } from './component/my-account/change-security-questions/change-security-questions.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'patientInfo/:id', component: PatientInfoComponent },
  { path: 'patientSummary/:id', component: PatientSummaryComponent},
  { path: 'account', component: MyAccountComponent,
    children:[
      {path: 'myprofile', component: MyProfileComponent},
      {path: 'mypin', component: MyPinComponent},
      {path: 'changepassword', component: ChangePasswordComponent},
      {path: 'changesecurityquestions', component: ChangeSecurityQuestionsComponent},
      { path: '**', redirectTo: 'myprofile' },
    ]
  },
  { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
