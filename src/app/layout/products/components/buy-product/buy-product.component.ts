import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.scss']
})
export class BuyProductComponent implements OnInit {

  @Input() imgSrc: string;

  public item: any;

  constructor() { }

  ngOnInit() {
    this.item =
      {
          imgSrc: '../../assets/img/products/22.png',
          title: 'Anime',
          description:
              // tslint:disable-next-line:max-line-length
              'The title is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.',
          charge: '$899/night',
          location: 'Barcelona, Spain'
      };
  }

}
