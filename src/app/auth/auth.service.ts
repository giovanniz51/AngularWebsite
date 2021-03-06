import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase';



@Injectable()
export class AuthService {
    
  token: string;
  constructor(private router: Router) { }
  
  onRegisterUser(email: string, password: string){
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(
            (error) => {console.log(error);}
        );
  }
  
  onLoginUser(email: string, password: string) {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
            (respond) => {
                this.router.navigate(['/']);
                firebase.auth().currentUser.getToken()
                    .then(
                        (token: string) => { this.token = token;}
                    );
            }
        )
        .catch(
            (error) => {console.log(error);}
        )

  }
  
  getToken() {
      firebase.auth().currentUser.getToken()
        .then(
            (token: string) => { this.token = token;}
        );
        return this.token;
  }
  
  isAuthenticated() {
      return this.token != null //ergibt true wenn token nicht null 
  }
  
  logout() {
      firebase.auth().signOut();
      this.token = null
  }

}
