import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';
import { Work } from 'src/app/shared/models/work.model';
import { WorkService } from 'src/app/shared/services/work.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  formWork: FormGroup |any;
  user: User | any;

  constructor(
    private workService: WorkService,
    private router: Router,
  ){ 
    this.works= new Array<Work>;
  }

  works: Array<Work>;
ngOnInit(){
  this.formWork = new FormGroup({
    text: new FormControl(null, [Validators.required]),
    title: new FormControl(null, [Validators.required, Validators.maxLength(30)],this.forbiddenTitle.bind(this))
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
  const userString = window.localStorage.getItem('user'); 
  if (userString) {
    const user = JSON.parse(userString);
    if (user && user.name) {
      const work = new Work(user.email, formData.text, Date.now(), formData.title); 
      this.workService.getWork(formData.title).subscribe((data)=>{
        if(!data[0]){
          this.workService.createWork(work).subscribe(()=> 
            { 
              console.log(work);
              this.works.push(work) 
              this.router.navigate(['/system/home'])
            })
          }
        })
    } 
  } 
} 
}