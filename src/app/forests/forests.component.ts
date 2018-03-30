import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ForestsService } from '../forests.service';
import { AuthService } from '../auth/auth.service';
import { Forest } from '../forest';

import { NgForm } from '@angular/forms';

import { Response } from '@angular/http';

@Component({
  selector: 'app-forests',
  templateUrl: './forests.component.html',
  styleUrls: ['./forests.component.css']
})
export class ForestsComponent implements OnInit {
  
  
  forests: Forest[]; 
  
  id: number;

  
  
  

  constructor(private forestsService: ForestsService, private router: Router, private route: ActivatedRoute, public authService: AuthService) { }



  ngOnInit() {
    
    
    
      this.forestsService.getForests()
        .subscribe(
        (forests: any[]) => {this.forests = forests}, (error) => {console.log(error);}    
      );

      console.log(this.forests);

  }
  

  
}
