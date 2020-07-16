import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TabService } from 'src/app/tab.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {
  username:any;
  constructor(private route: ActivatedRoute, private tabService: TabService, private router: Router) { }

  onSelect(e: any) {
    this.router.navigate(e);
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.username = params.username;
      this.tabService.sendTabNameID('My Account', this.username, 'account');
    })
  }

}
