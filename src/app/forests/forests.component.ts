import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ForestsService } from '../forests.service';
import { Forest } from '../forest';

import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-forests',
  templateUrl: './forests.component.html',
  styleUrls: ['./forests.component.css']
})
export class ForestsComponent implements OnInit {
  
  
  forests: Forest[]; 
  
  id: number;

  
  
  

  constructor(private forestsService: ForestsService, private router: Router, private route: ActivatedRoute) { }

    getForests() {
      this.forests = this.forestsService.getForests();
    }


  ngOnInit() {
    
    this.getForests();
    console.log(this.forests[0].id);

  }
  
  onShowForest(forest: Forest) {
    this.forestsService.showForest(forest);
    this.router.navigate([forest.id], {relativeTo: this.route});
  }
  
  onSubmit(form: NgForm) {
    this.id = Math.floor(Math.random() * 20);
    this.forestsService.addForests(form.value.name, form.value.location, form.value.imagePath, this.id, form.value.description);
  }
  
}
