import { Injectable } from '@angular/core';
import { Forest } from './forest';

import { BehaviorSubject  } from 'rxjs/BehaviorSubject';
import { Observable  } from 'rxjs/Observable';

import { Http, Headers, Response } from '@angular/http';

import 'rxjs/Rx';

@Injectable()
export class ForestsService {


  constructor(private http: Http) { 

  }
  
  saveForests(forests: any[]) {
    return this.http.put('https://angular-website-15c4f.firebaseio.com/data.json', forests);
  }
  
  getForests() {
      return this.http.get('https://angular-website-15c4f.firebaseio.com/data.json')
        .map(
            (response: Response) => {
              const data = response.json();
              return data;
            }
          );
  }


}
