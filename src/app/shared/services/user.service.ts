import { Injectable } from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import { Observable, catchError, throwError } from "rxjs";
import { User } from "../models/user.model";

@Injectable()
export class UserService{
    constructor(private http: HttpClient){}
    
    getUsers(email: string): Observable<User[]>{
        return this.http.get<User[]>(`http://localhost:3000/users?email=${email}`)
        .pipe(
            catchError((error)=>{
                alert("Ошибка сервер не доступен(((");
                return throwError(()=>
                new HttpErrorResponse(error));
            })
        )
    }
       
    createUser(user: User){
        return this.http.post(`http://localhost:3000/users`, user)
        .pipe(
            catchError((error)=>{
                alert("Ошибка сервер не доступен(((");
                return throwError(()=>
                new HttpErrorResponse(error));
            })
        )
    }   
}