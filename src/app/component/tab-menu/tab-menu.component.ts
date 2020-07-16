import { Component} from '@angular/core';
import { TabService } from 'src/app/tab.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tab-menu',
  templateUrl: './tab-menu.component.html',
  styleUrls: ['./tab-menu.component.scss']
})
export class TabMenuComponent {
  tabList:any = [];
  tabLink:any = [];
  closeTab(index){
    this.router.navigateByUrl(this.tabLink[index-1]);
    this.tabLink.splice(index,1);
    this.tabList.splice(index,1);
  }
  constructor(private tabservice : TabService, private route: ActivatedRoute, private router:Router){}
  ngOnInit(){
    this.tabservice.tabDetail$.subscribe((details)=>{
      if(!this.tabList.some((item) => item.id == details.id)){
        this.tabList.push(details);
        this.tabLink.push(this.router.url);
      }
    });
  }
  
}
