import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TabService } from 'src/app/tab.service';

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.scss']
})
export class PatientInfoComponent {
  PatientId : any;
  patientInfoArr : any;
  constructor(private route: ActivatedRoute, private httpService: HttpClient, private tabService: TabService) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.PatientId = params.id;
      this.httpService.get('./assets/patient.json').subscribe(data => {
        this.patientInfoArr = data as string;
        this.patientInfoArr = this.patientInfoArr.filter(info => info.ID == this.PatientId);
        this.tabService.sendTabNameID(this.patientInfoArr[0].name+' - Information', this.PatientId, 'patientInfo');
      });
    });
  }

}
