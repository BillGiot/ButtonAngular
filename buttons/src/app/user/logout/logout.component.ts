import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'], 
  encapsulation: ViewEncapsulation.None
})
export class LogoutComponent implements OnInit {
  
  constructor(private authService: AuthenticationService, private router: Router) { }
  
      ngOnInit() {
        this.authService.logout();
        this.router.navigate(['/buttonpage']);
      }
  

}
