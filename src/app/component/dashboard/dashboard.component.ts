import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { CdkDragDrop, moveItemInArray, DragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    @ViewChild('dropArea', {static: false}) dropArea: ElementRef;
    @ViewChild('worklist', {static: false}) worklist: ElementRef;
    @ViewChild('patient', {static: false}) patient: ElementRef;

    constructor(private dragDropService: DragDrop){}

    ngOnInit(){     
    }
    
    ngAfterViewInit(){
      let dragRef1 = this.dragDropService.createDrag(this.worklist);
      let dragRef2 = this.dragDropService.createDrag(this.patient);
      let dragRefs = [dragRef1, dragRef2];
      let dropList = this.dragDropService.createDropList(this.dropArea).withItems(dragRefs);
      dropList.sortingDisabled = false;
      dropList.withOrientation("horizontal");
      dropList.dropped.subscribe(event => {
        console.log(dragRefs);
        moveItemInArray(dragRefs, event.previousIndex, event.currentIndex);
        console.log(event.previousIndex, event.currentIndex)
      });
    }

}
