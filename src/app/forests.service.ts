import { Injectable } from '@angular/core';
import { Forest } from './forest';

import { BehaviorSubject  } from 'rxjs/BehaviorSubject';

import { Http, Headers, Response } from '@angular/http';

import 'rxjs/Rx';

@Injectable()
export class ForestsService {
  forestShow = new BehaviorSubject<Forest>(null);
  forest: Forest;
  
  description = [
    "The Monteverde Cloud Forest Reserve (Reserva Biológica Bosque Nuboso Monteverde) is a Costa Rican reserve located along the Cordillera de Tilarán within the Puntarenas and Alajuela provinces. Named after the nearby town of Monteverde and founded in 1972,[1] the Reserve consists of over 10,500 hectares (26,000 acres) of cloud forest, the reserve is visited by roughly 70,000 visitors a year. The Reserve consists of 6 ecological zones, 90% of which are virgin forest.[2] An extremely high biodiversity, consisting of over 2,500 plant species (including the most orchid species in a single place), 100 species of mammals, 400 bird species, 120 reptilian and amphibian species, and thousands of insects, has drawn both scientists and tourists alike.",
    "The Amazon rainforest (Portuguese: Floresta Amazônica or Amazônia; Spanish: Selva Amazónica, Amazonía or usually Amazonia; French: Forêt amazonienne; Dutch: Amazoneregenwoud), also known in English as Amazonia or the Amazon Jungle, is a moist broadleaf forest in the Amazon biome that covers most of the Amazon basin of South America. This basin encompasses 7,000,000 km2 (2,700,000 sq mi), of which 5,500,000 km2 (2,100,000 sq mi) are covered by the rainforest. This region includes territory belonging to nine nations. The majority of the forest is contained within Brazil, with 60% of the rainforest, followed by Peru with 13%, Colombia with 10%, and with minor amounts in Venezuela, Ecuador, Bolivia, Guyana, Suriname and French Guiana. States or departments in four nations contain Amazonas in their names. The Amazon represents over half of the planet's remaining rainforests,[1] and comprises the largest and most biodiverse tract of tropical rainforest in the world, with an estimated 390 billion individual trees divided into 16,000 species",
    "The Black Forest (German: Schwarzwald, pronounced [ˈʃvaʁt͡svalt]) is a large forested mountain range in the state of Baden-Württemberg in southwest Germany. It is bounded by the Rhine valley to the west and south. Its highest peak is the Feldberg with an elevation of 1,493 metres (4,898 ft). The region is roughly oblong in shape with a length of 160 km (99 mi) and breadth of up to 50 km (31 mi)"
    ]
    
  forests: Forest[] = [ new Forest( 'Monteverde Cloud Forest', 'Costa Rica', 'http://images.guidetrip.com/images/uploads/experiences/13761/monte%20verde%20cloud%20forest.jpg', 1, this.description[0]  ),
                        new Forest( 'Amazonia Rainforest', 'Amazonia', 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Amazon_CIAT_%282%29.jpg/1920px-Amazon_CIAT_%282%29.jpg', 2, this.description[1]),
                        new Forest( 'Schwarzwald Forest', 'Germany', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Blick_auf_den_Schluchsee_-_panoramio.jpg/1920px-Blick_auf_den_Schluchsee_-_panoramio.jpg', 3, this.description[2])
      ]

  constructor(private http: Http) { }
  
  saveForests(forests: any[]) {
    return this.http.put('https://angular-website-15c4f.firebaseio.com/data.json', forests)
  }
  
  getForests() {
      return this.http.get('https://angular-website-15c4f.firebaseio.com/data.json')
        .map(
            (response: Response) => {
              const data = response.json();
              return data;
            }
          );
  }
  
  addForests(name: string, location: string, img: string, id: number, description: string){
      this.forests.push(new Forest(name, location, img, id, description));
  }
  

}
