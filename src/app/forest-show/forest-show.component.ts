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
  
  forest: Forest;
  subscription: Subscription;

  constructor(private forestsService: ForestsService ) { }

  ngOnInit() {
    this.subscription = this.forestsService.forestShow
      .subscribe(
        (forest) => {
          this.forest = forest;
          
        }  
      )

  }
  
  ngOnDestroy () {
    this.subscription.unsubscribe()
  }
  

}
