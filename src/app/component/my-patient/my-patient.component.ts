import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TabService } from 'src/app/tab.service';
import { Router } from '@angular/router';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-my-patient',
  templateUrl: './my-patient.component.html',
  styleUrls: ['./my-patient.component.scss']
})
export class MyPatientComponent implements OnInit {

  constructor(private httpService: HttpClient, private tabservice: TabService, private router: Router) { }
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  myPatientArr:any;
  myPatientColumns: string[] = ['name', 'dob', 'gender', 'address'];
  ngOnInit() {
    this.httpService.get('./assets/myPatient.json').subscribe(
      data =>{
        this.myPatientArr = new MatTableDataSource();
        this.myPatientArr.data = data;
        this.myPatientArr.paginator = this.paginator;
      },
    );
  }
  myPatientRowClick(val:any){
    this.router.navigate(['/patientSummary', val.ID]);
  }
}
