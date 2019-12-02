import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  places: Array<any> = [];

  constructor() { }

  ngOnInit() {
    this.places = [
      {
          imgSrc: '../../assets/img/category/Pasari.jpg',
          place: 'Semne Astrologice',
          description:
              // tslint:disable-next-line:max-line-length
              'The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.',
          charge: '$899/night',
          location: 'Barcelona, Spain'
      },
      {
          imgSrc: '../../assets/img/category/Pasari.jpg',
          place: 'Inscriptii',
          description:
              // tslint:disable-next-line:max-line-length
              'The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the night life in London, UK.',
          charge: '$1,119/night',
          location: 'London, UK'
      },
      {
          imgSrc: '../../assets/img/category/Pasari.jpg',
          place: 'Animale/Natura',
          description:
              // tslint:disable-next-line:max-line-length
              'The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Milan.',
          charge: '$459/night',
          location: 'Milan, Italy'
      }
      ,
      {
          imgSrc: '../../assets/img/category/Pasari.jpg',
          place: 'Pasari/Aripi',
          description:
              // tslint:disable-next-line:max-line-length
              'The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Milan.',
          charge: '$459/night',
          location: 'Milan, Italy'
      }
  ];

  }

}
