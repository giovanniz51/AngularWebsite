import { Component, OnInit } from '@angular/core';
import { ForestsService } from '../forests.service';
import { Forest } from '../forest';


@Component({
  selector: 'app-forests',
  templateUrl: './forests.component.html',
  styleUrls: ['./forests.component.css']
})
export class ForestsComponent implements OnInit {
  
  forests: Forest[]; 
  
  name: string;
  location: string;
  img: string;
  

  constructor(private forestsService: ForestsService) { }

    getForests() {
      this.forests = this.forestsService.getForests();
    }


  ngOnInit() {
    
    this.getForests();

  }
  
  addForests(){
    this.forestsService.addForests(this.name, this.location, this.img);
  }
  
}
