import { Component, OnInit  } from '@angular/core';
import * as $ from 'jquery';

import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public ngOnInit()
  {
    firebase.initializeApp({
      apiKey: "AIzaSyBdOpo6dL2fO4ukyWXKs5TUM3sEwTBSAoM",
      authDomain: "angular-website-15c4f.firebaseapp.com",
    });

  }
}