import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular-products-cards',
  templateUrl: './popular-products-cards.component.html',
  styleUrls: ['./popular-products-cards.component.scss']
})
export class PopularProductsCardsComponent implements OnInit {

  places: Array<any> = [];

  constructor() { }

  ngOnInit() {
    this.places = [
      {
          imgSrc: '../../assets/img/products/22.png',
          title: 'Anime',
          description:
              // tslint:disable-next-line:max-line-length
              'The title is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.',
          charge: '$899/night',
          location: 'Barcelona, Spain'
      },
      {
          imgSrc: '../../assets/img/products/024.png',
          title: 'Simbol',
          description:
              // tslint:disable-next-line:max-line-length
              'The title is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the night life in London, UK.',
          charge: '$1,119/night',
          location: 'London, UK'
      },
      {
          imgSrc: '../../assets/img/products/031.png',
          title: 'Simbol',
          description:
              // tslint:disable-next-line:max-line-length
              'The title is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Milan.',
          charge: '$459/night',
          location: 'Milan, Italy'
      },
      {
          imgSrc: '../../assets/img/products/48.png',
          title: 'Simbol',
          description:
              // tslint:disable-next-line:max-line-length
              'The title is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Milan.',
          charge: '$459/night',
          location: 'Milan, Italy'
      },
      {
          imgSrc: '../../assets/img/products/64.png',
          title: 'Simbol',
          description:
              // tslint:disable-next-line:max-line-length
              'The title is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Milan.',
          charge: '$459/night',
          location: 'Milan, Italy'
      },
      {
          imgSrc: '../../assets/img/products/67.png',
          title: 'Simbol',
          description:
              // tslint:disable-next-line:max-line-length
              'The title is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Milan.',
          charge: '$459/night',
          location: 'Milan, Italy'
      },
      {
          imgSrc: '../../assets/img/products/80.png',
          title: 'Symbol',
          description:
              // tslint:disable-next-line:max-line-length
              'The title is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Milan.',
          charge: '$459/night',
          location: 'Milan, Italy'
      },
      {
          imgSrc: '../../assets/img/products/ancora.png',
          title: 'Ancora',
          description:
              // tslint:disable-next-line:max-line-length
              'The title is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Milan.',
          charge: '$459/night',
          location: 'Milan, Italy'
      },
      {
          imgSrc: '../../assets/img/products/anklet-tattoo.png',
          title: 'Anklet',
          description:
              // tslint:disable-next-line:max-line-length
              'The title is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Milan.',
          charge: '$459/night',
          location: 'Milan, Italy'
      },
      {
          imgSrc: '../../assets/img/products/arbore.png',
          title: 'Arbore',
          description:
              // tslint:disable-next-line:max-line-length
              'The title is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Milan.',
          charge: '$459/night',
          location: 'Milan, Italy'
      },
      {
          imgSrc: '../../assets/img/products/aripa.png',
          title: 'Aripa',
          description:
              // tslint:disable-next-line:max-line-length
              'The title is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Milan.',
          charge: '$459/night',
          location: 'Milan, Italy'
      },
      {
          imgSrc: '../../assets/img/products/aripi-modelul-1.png',
          title: 'Aripi',
          description:
              // tslint:disable-next-line:max-line-length
              'The title is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Milan.',
          charge: '$459/night',
          location: 'Milan, Italy'
      },
      {
          imgSrc: '../../assets/img/products/aripi-modelul-2.png',
          title: 'Aripi',
          description:
              // tslint:disable-next-line:max-line-length
              'The title is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Milan.',
          charge: '$459/night',
          location: 'Milan, Italy'
      },
      {
          imgSrc: '../../assets/img/products/aripi-modelul-3.png',
          title: 'Aripi',
          description:
              // tslint:disable-next-line:max-line-length
              'The title is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Milan.',
          charge: '$459/night',
          location: 'Milan, Italy'
      },
      {
          imgSrc: '../../assets/img/products/aripi-modelul-4.png',
          title: 'Aripi',
          description:
              // tslint:disable-next-line:max-line-length
              'The title is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Milan.',
          charge: '$459/night',
          location: 'Milan, Italy'
      },
      {
          imgSrc: '../../assets/img/products/aripi-modelul-5.png',
          title: 'Aripi',
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