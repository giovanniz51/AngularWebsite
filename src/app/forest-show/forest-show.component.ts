import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ForestsService } from '../forests.service';
import { Forest } from '../forest';

@Component({
  selector: 'app-forest-show',
  templateUrl: './forest-show.component.html',
  styleUrls: ['./forest-show.component.css']
})
export class ForestShowComponent implements OnInit {
  
  forest: Forest;

  constructor(private forestsService: ForestsService ) { }

  ngOnInit() {
    this.forestsService.forestShow
      .subscribe(
        (forest) => {
          this.forest = forest;
          
        }  
      )

  }
  

}
