import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/rx';

import 'rxjs/add/operator/map';

@Injectable()
export class HeroService {
    heroes = [
        {'name': 'Hyperion', 'age': 423},
        {'name': 'Excelsior', 'age': 34}
     ];

     jsonData = new BehaviorSubject(null);
     jsonData$ = this.jsonData.asObservable();
     constructor(private http: Http) { }

     getHeroes() {
         return this.heroes;
     }

     getUsers() {
         return this.http.get('https://jsonplaceholder.typicode.com/users')
         .map(res => res.json());
     }
}