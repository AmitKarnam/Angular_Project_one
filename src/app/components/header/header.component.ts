import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: String = 'Portfolio';
  userLoggedIn: Boolean = false;
  private authSubscription: Subscription | undefined

  constructor(public auth: AuthServiceService, private router: Router) { }

  //LifeCycle method , we can put code that runs when the component loads(Initialise Code).
  ngOnInit(): void {
    this.authSubscription = this.auth.ifLoggedIn().subscribe((loggedIn) => this.userLoggedIn = loggedIn)
  }

  ngOnDestroy(): void {
    if(this.authSubscription)
    this.authSubscription.unsubscribe()
  }

  toggleLogin(): void{
    if(this.userLoggedIn){
      this.auth.logout()
    }

    this.router.navigate(['/login'])
  }
}