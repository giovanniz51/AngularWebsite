import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ForestsService } from '../forests.service';
import { Forest } from '../forest';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-forest-show',
  templateUrl: './forest-show.component.html',
  styleUrls: ['./forest-show.component.css']
})
export class ForestShowComponent implements OnInit, OnDestroy {
  
  
  
  forests: Forest[];
  subscription: Subscription;
  id;

  forest: Forest;

  constructor(private forestsService: ForestsService, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.subscription = this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id']; //(+) converts string 'id' to a number
          
        }  
      )
    this.forestsService.getForests()
      .subscribe(
        (forests: any[]) => { 
          this.forests = forests; 
          
          this.forest = this.forests.find( 
            (forest) => { return forest.id === this.id }
          );
          console.log(this.forest) 
          
        }, 
        (error) => {
          console.log(error);
          
        }  
      );

  }
  
  ngOnDestroy () {
    this.subscription.unsubscribe()
  }
  

}
