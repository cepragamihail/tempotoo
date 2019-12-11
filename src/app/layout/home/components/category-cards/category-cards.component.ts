import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-cards',
  templateUrl: './category-cards.component.html',
  styleUrls: ['./category-cards.component.scss']
})
export class CategoryCardsComponent implements OnInit {

  places: Array<any> = [];

  constructor() { }

  ngOnInit() {
    this.places = [
      {
          imgSrc: '../../assets/img/category/categorie-animale.jpg',
          title: 'Animale',
          description:
              // tslint:disable-next-line:max-line-length
              'The title is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.',
          charge: '$899/night',
          location: 'Barcelona, Spain'
      },
      {
          imgSrc: '../../assets/img/category/categorie-inscriptie.jpg',
          title: 'Inscriptii',
          description:
              // tslint:disable-next-line:max-line-length
              'The title is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the night life in London, UK.',
          charge: '$1,119/night',
          location: 'London, UK'
      },
      {
          imgSrc: '../../assets/img/category/categorie-pasare.jpg',
          title: 'Pasari/Aripi',
          description:
              // tslint:disable-next-line:max-line-length
              'The title is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Milan.',
          charge: '$459/night',
          location: 'Milan, Italy'
      }
      ,
      {
          imgSrc: '../../assets/img/category/categorie-altele.jpg',
          title: 'Altele',
          description:
              // tslint:disable-next-line:max-line-length
              'The title is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Milan.',
          charge: '$459/night',
          location: 'Milan, Italy'
      }
  ];

  }

  onCardClick($event) {
    console.log($event);
   }

}
