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
  id: number;

  constructor(private router: Router, private route: ActivatedRoute, private forestsService: ForestsService ) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
        }  
      )
    let forests = this.forestsService.getForests();
    this.forest = forests.find(forest => forest.id==this.id);
  }
  

}
