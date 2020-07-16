import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TabService } from 'src/app/tab.service';

@Component({
  selector: 'app-patient-summary',
  templateUrl: './patient-summary.component.html',
  styleUrls: ['./patient-summary.component.scss']
})
export class PatientSummaryComponent implements OnInit {
  PatientId : any;
  patientInfoArr : any;
  constructor(private route: ActivatedRoute, private httpService: HttpClient, private tabService: TabService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.PatientId = params.id;
      this.httpService.get('./assets/myPatient.json').subscribe(data => {
        this.patientInfoArr = data as string;
        this.patientInfoArr = this.patientInfoArr.filter(info => info.ID == this.PatientId);
        this.tabService.sendTabNameID(this.patientInfoArr[0].name +' - Summary', this.PatientId, 'patientSummary');
      });
    });
  }

}
