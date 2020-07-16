import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
export interface TabStructure {
  name: string;
  id: string;
  type:string;
}
@Injectable({
  providedIn: 'root'
})
export class TabService {
  private tDetail = new Subject<TabStructure>();
  tabDetail$ = this.tDetail.asObservable();
  constructor() { }

  sendTabNameID(tabTitle:string, tabId:string, tabType:string){
    this.tDetail.next({name: tabTitle, id: tabId, type:tabType});
  }
}
