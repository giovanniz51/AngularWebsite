import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ForestsService } from '../forests.service';
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

  
  
  

  constructor(private forestsService: ForestsService, private router: Router, private route: ActivatedRoute) { }



  ngOnInit() {
    
    this.forests = this.forestsService.forests;
    
      this.forestsService.getForests()
        .subscribe(
        (forests: any[]) => {this.forests = forests}, (error) => {console.log(error);}    
      );

      console.log(this.forests);

  }
  
  onSubmit(form: NgForm) {
    this.id = Math.floor(Math.random() * 10000);
    this.forestsService.addForests(form.value.name, form.value.location, form.value.imagePath, this.id, form.value.description);
    this.forests = this.forestsService.forests;
    this.forestsService.saveForests(this.forests)
      .subscribe(
        (response) => {console.log(response);}, (error) => {console.log(error);}  
      );

    form.reset();

  }
  
}
