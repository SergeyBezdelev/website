import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-reg',
  templateUrl: './Reg.component.html',
  styleUrls: ['../auth.component.css']
})
export class RegComponent implements OnInit { 

  form: FormGroup | any;
  name: any | undefined;
  email: any | undefined;
  password: any | undefined;

constructor(
  private userService: UserService,
  private router: Router,
  private authService: AuthService
  ) {}

ngOnInit(): void {
  this.form = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmail.bind(this)),
    password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
});
this.authService.logout();
}
onSubmit(){
  console.log(this.form.value);
  const {name, email, password} = this.form.value;
  const user = new User(name, email, password);
  this.userService.createUser(user)
  .subscribe(() => {
    window.localStorage.setItem('user', JSON.stringify(user));
    this.authService.login();
    this.router.navigate(['/system/home'], {
      queryParams: {
        canLogin: true
      }
    });
  });
}
forbiddenEmail(control: AbstractControl): Promise<any> {
  return new Promise((resolve) => {
    this.userService.getUsers(control.value)
    .subscribe((user) => {
      if (user[0]){
        resolve({forbiddenEmail: true});
      } else{
        resolve(null);
      }
    });
  });
}
toLog(){
  this.router.navigate(['/auth/login']);
}
}