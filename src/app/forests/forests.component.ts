import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  id: number;
  description: string;
  
  forest: Forest;
  
  
  

  constructor(private forestsService: ForestsService, private router: Router, private route: ActivatedRoute) { }

    getForests() {
      this.forests = this.forestsService.getForests();
    }


  ngOnInit() {
    
    this.getForests();
    console.log(this.forests[0].id);

  }
  
  addForests(){
    this.id = Math.floor(Math.random() * 20);
    this.forestsService.addForests(this.name, this.location, this.img, this.id, this.description);
  }
  
  showForest(forest: Forest) {
    this.forest = forest;
    let forestId = forest ? forest.id : null;
    // Pass along the forest id if available
    // so that the Forest component can select that forest.
    this.router.navigate([forestId], {relativeTo: this.route});
  }
  
}
