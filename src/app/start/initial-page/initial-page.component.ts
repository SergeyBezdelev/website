import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.css']
})
export class InitialPageComponent {
  constructor(
    private router: Router,
 ) {}
  toAuth(){
    this.router.navigate(['/auth/login'])
  }
}
