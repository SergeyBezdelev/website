import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import { Work } from "../models/work.model";

@Injectable()
export class WorkService{
    constructor(private http: HttpClient){}

    getWork(title: string): Observable<Work[]>{
        return this.http.get<Work[]>(`http://localhost:3000/works?title=${title}`)
    }

    getWorks(){
        return this.http.get<Array<Work>>(`http://localhost:3000/works`);
    }
        
    createWork(work: Work){
        console.log('create')
        return this.http.post(`http://localhost:3000/works`, work)
    }

    updateWork(id:number, work:Work){
        return this.http.put(`http://localhost:3000/works/`+id+``, work);
    }
    
    deleteWork(id:number){
        return this.http.delete(`http://localhost:3000/works/` + id)
    }
}