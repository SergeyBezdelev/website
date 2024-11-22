import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../auth.component.css']
})
export class LoginComponent implements OnInit {
  
  form: FormGroup |any;
  email:any|undefined;
  password:any|undefined;
  
  constructor (
    private userService: UserService,
    private authService: AuthService,
    private router:Router
    ) {}
    
    toReg(){
      this.router.navigate(['/auth/register']);
    }
ngOnInit() {
  this.form = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(6)])
  });
  this.authService.logout();
}

onSubmit(){
  const formData =this.form.value;
  this.userService.getUsers(formData.email as string)
  .subscribe((user)=>{
    console.log(user)
    if (user[0]){
      console.log(user[0])
      console.log(user[0].password)
      console.log(formData.password)
      if(user[0].password==formData.password){
        console.log('все верно!')
        window.localStorage.setItem('user',JSON.stringify(user[0]));
        this.authService.login();
        this.router.navigate(['/system', 'home']);
      } else{
        alert('пароль неверный(')
      }
    } else {
      alert('пользователя не существует(');
    }
});
}
}