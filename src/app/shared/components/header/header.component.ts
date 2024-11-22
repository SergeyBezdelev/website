import { Component, Directive, HostBinding, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  user: User | any;
    constructor(
       private router: Router,
       private authService:AuthService
    ) {}
    
     ngOnInit() {
      const userData = window.localStorage.getItem('user');
      if (userData) {
        this.user = JSON.parse(userData);
      } else {
        console.log('Пользовательские данные не найдены в локальном хранилище');
      }
    }
      logout(){
        this.authService.logout();
        this.router.navigate(['/start/initial-page'])
      }
       toCreateWork(){
        this.router.navigate(['/system/work'])
      }
      toMain(){
        this.router.navigate(['/system/home'])
      }
}
