import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { TabMenuComponent } from './component/tab-menu/tab-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { PatientInfoComponent } from './component/patient-info/patient-info.component';
import { PatientSummaryComponent } from './component/patient-summary/patient-summary.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MyAccountComponent } from './component/my-account/my-account.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { MyProfileComponent } from './component/my-account/my-profile/my-profile.component';
import { MyPinComponent } from './component/my-account/my-pin/my-pin.component';
import { ChangePasswordComponent } from './component/my-account/change-password/change-password.component';
import { ChangeSecurityQuestionsComponent } from './component/my-account/change-security-questions/change-security-questions.component';
import { ChartModule } from 'primeng/primeng';
import { MyWorklistComponent } from './component/my-worklist/my-worklist.component';
import { MyPatientComponent } from './component/my-patient/my-patient.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SideNavigationComponent } from './component/side-navigation/side-navigation.component';
import { LoginComponent } from './component/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TabMenuComponent,
    PatientInfoComponent,
    PatientSummaryComponent,
    HeaderComponent,
    FooterComponent,
    MyAccountComponent,
    MyProfileComponent,
    MyPinComponent,
    ChangePasswordComponent,
    ChangeSecurityQuestionsComponent,
    MyWorklistComponent,
    MyPatientComponent,
    SideNavigationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartModule,
    DragDropModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
