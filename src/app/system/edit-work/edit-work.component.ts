import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';
import { Work } from 'src/app/shared/models/work.model';
import { WorkService } from 'src/app/shared/services/work.service';

@Component({
  selector: 'app-edit-work',
  templateUrl: './edit-work.component.html',
  styleUrls: ['./edit-work.component.css']
})
export class EditWorkComponent {
    formWork: FormGroup |any;
    user: User | any;
    work: any;

    constructor(
      private workService: WorkService,
      private router: Router,
    ){ 
      this.works= new Array<Work>;
      const workString = window.localStorage.getItem('workForEdit'); 
      if (workString) {
        this.work = JSON.parse(workString);
      }
    }
  
    works: Array<Work>;
  ngOnInit(){
    this.formWork = new FormGroup({
      text: new FormControl(this.work.text, [Validators.required]),
      title: new FormControl(this.work.title, [Validators.required, Validators.maxLength(30)],this.forbiddenTitle.bind(this))
    }); 
    const userData = window.localStorage.getItem('user');
    if (userData) {
        this.user = JSON.parse(userData);
    } else {
        console.log('Пользовательские данные не найдены в локальном хранилище');
    }
    this.workService.getWorks().subscribe((data) => {
        this.works = data.filter((work) => this.user.email === work.authorEmail);
    });
  }
  
  forbiddenTitle(control: AbstractControl): Promise<any> {
    return new Promise((resolve) => {
        const title = control.value;
        if (this.works.some((work) => work.title === title)) {
            resolve({ forbiddenTitle: true });
        } else {
            resolve(null);
        }
    });
  }
  
  onSubmit(){ 
    const formData = this.formWork.value;
    let updWork:Work= new Work(this.work.authorEmail,formData.text,this.work.date,formData.title);
    this.workService.updateWork(this.work.id,updWork).subscribe(()=>{
      window.localStorage.removeItem('workForEdit');
      this.router.navigate(['/system/home'])
      });
  } 
}

