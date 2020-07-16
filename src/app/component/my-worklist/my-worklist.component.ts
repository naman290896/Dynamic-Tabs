import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TabService } from 'src/app/tab.service';
import { Router } from '@angular/router';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-my-worklist',
  templateUrl: './my-worklist.component.html',
  styleUrls: ['./my-worklist.component.scss']
})
export class MyWorklistComponent implements OnInit {

  constructor(private httpService: HttpClient, private tabservice: TabService, private router: Router) { }
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  worklistArr:any;
  worklistColumns: string[] = ['name', 'type', 'status', 'priority', 'dueOn'];
  ngOnInit() {
    this.httpService.get('./assets/worklist.json').subscribe(
      data =>{
        this.worklistArr = new MatTableDataSource();
        this.worklistArr.data = data;
        this.worklistArr.paginator = this.paginator;
      }
    )
  }
  worklistRowClick(val:any){
    this.router.navigate(['/patientInfo', val.ID]);
  }
}
