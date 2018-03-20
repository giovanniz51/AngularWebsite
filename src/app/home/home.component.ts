import { Component, OnInit } from '@angular/core';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  email: string;

  constructor() { }

  ngOnInit() {
  }
  
  logEmail() {
    console.log(this.email);
  }

}
