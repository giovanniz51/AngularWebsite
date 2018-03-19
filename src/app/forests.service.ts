import { Injectable } from '@angular/core';
import { Forest } from './forest';

@Injectable()
export class ForestsService {
    
  forests: Forest[] = [ new Forest( 'Monteverde Cloud Forest', 'Costa Rica', 'http://images.guidetrip.com/images/uploads/experiences/13761/monte%20verde%20cloud%20forest.jpg' ),
                        new Forest( 'Amazonia Rainforest', 'Amazonia', 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Amazon_CIAT_%282%29.jpg/1920px-Amazon_CIAT_%282%29.jpg'),
                        new Forest( 'Schwarzwald Forest', 'Germany', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Blick_auf_den_Schluchsee_-_panoramio.jpg/1920px-Blick_auf_den_Schluchsee_-_panoramio.jpg')
      ]

  constructor() { }
  
  getForests() {
      return this.forests;
  }
  
  addForests(name: string, location: string, img: string){
      this.forests.push(new Forest(name, location, img));
  }

}
