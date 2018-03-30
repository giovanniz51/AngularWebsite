import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Params, ActivatedRoute, Router } from '@angular/router'
import { Forest } from '../forest';
import { ForestsService } from '../forests.service';



@Component({
  selector: 'app-forest-edit',
  templateUrl: './forest-edit.component.html',
  styleUrls: ['./forest-edit.component.css']
})
export class ForestEditComponent implements OnInit {
  

  forests: Forest[];
  forest: Forest;
  
  forestId: number;
  
  forestName: string;
  forestLocation: string;
  forestImg: string;
  forestDescription: string;
  
  index: number;
  
  editState: boolean;

  
  constructor(private forestsService: ForestsService, private route: ActivatedRoute,
              public router: Router) {   }
  
  
  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.forestId = +params['id'];
      }
    );
    
    this.forestsService.getForests().subscribe(
      (forests: Forest[]) => {
        this.forests = forests;
        
        this.forest = this.forests.find( 
          (forest) => { return forest.id === this.forestId }
        );
        this.index = this.forests.findIndex( 
          (x => x.id == this.forest.id)
        );
    
      this.forestName = this.forest.name;
      this.forestImg = this.forest.img;
      this.forestLocation = this.forest.location;
      this.forestDescription = this.forest.description;
      }

    );

  }
  
  
  
 
  
  onSubmit(){
  
  let updatedForest: Forest = {
      name: this.forestName,
      img: this.forestImg,
      location: this.forestLocation,
      description: this.forestDescription,
      id: this.forestId
  }
  
  this.forests[this.index] = updatedForest;
  
  this.forestsService.saveForests(this.forests)
    .subscribe(
      (response) => {console.log(response); this.editState = true; }, (error) => {console.log(error); }
      );
  

}
}
