import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';
import { Work } from 'src/app/shared/models/work.model';
import { WorkService } from 'src/app/shared/services/work.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: User | any;
  work: Work | any;

  constructor(
    private workService:WorkService,
    private router: Router,
  ){
    this.works= new Array<Work>;
  }
  works: Array<Work>;
  
  ngOnInit(){
    this.workService.getWorks().subscribe((data)=> {
      const userData = window.localStorage.getItem('user');
    if (userData) {
        this.user = JSON.parse(userData);
    } else {
        console.log('Пользовательские данные не найдены в локальном хранилище');
    }
    this.workService.getWorks().subscribe((data) => {
        this.works = data.filter((work) => this.user.email === work.authorEmail);
        this.works.reverse();
    });
    })
  }


  toEdit(work:Work){
    window.localStorage.setItem('workForEdit', JSON.stringify(work));
    this.router.navigate(['/system/edit-work'])
  }

 toDel(id:number|undefined){
    if(window.confirm("Вы уверены, что хотите удалить эту работу?")) {
    this.workService.deleteWork(id as number).subscribe(() => {
      for(let i = 0; i < this.works.length; ++i){
        if (this.works[i].id === id) {
            this.works.splice(i,1);
        }
      }
      });
    }
  }
}