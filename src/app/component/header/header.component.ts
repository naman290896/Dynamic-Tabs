import { Component, OnInit } from '@angular/core';
import { TabService } from 'src/app/tab.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  username:string = 'Test';
  customerLogo = 'icare-health.png'
  constructor(private tabService : TabService, private router: Router) { }

  ngOnInit() {
  }
  usernameClick(){
    this.router.navigate(['/account']);
  }

}
