import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ForestsService } from '../forests.service';

import { Forest } from '../forest';

import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  forests: Forest[];
  
  id: number;

  
  constructor(public forestsService: ForestsService, private router: Router) { }
  
  ngOnInit() {
    
   this.forestsService.getForests().subscribe(
      (forests: Forest[]) => { this.forests = forests; } 
    );
  }
  
  onEditForest(forest: Forest){
    this.router.navigate(['/forests', forest.id, 'edit']);
  }
  
  onDelete(forest: Forest){
    let index = this.forests.indexOf(forest);
    this.forests.splice(index, 1);
    this.forestsService.saveForests(this.forests)
      .subscribe(
        (response) => {console.log(response);}, (error) => {console.log(error);}  
      );
  }

  onSubmit(form: NgForm) {
    this.id = Math.floor(Math.random() * 10000);
    let newForest: Forest = {
      name: form.value.name,
      location: form.value.location, 
      img: form.value.imagePath, 
      id: this.id, 
      description: form.value.description
    }
    
    this.forests.push( newForest );
    this.forestsService.saveForests(this.forests)
      .subscribe(
        (response) => {console.log(response);}, (error) => {console.log(error);}  
      );

    form.reset();

  }

}
