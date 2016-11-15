import {Injectable} from '@angular/core';

@Injectable()

export class TonyService{
    hobby : String;
    age : number;
    title : string;

    constructor(){
        this.hobby = 'Basketball, drumming';
        this.age = 27;
        this.title = 'Software Dev.';
    }

}