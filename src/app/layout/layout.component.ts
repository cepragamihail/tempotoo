import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  title = 'TempoToo';

  nav = [
  {
    'title': 'Home',
    'path': '/'
  },
  {
    'title': 'About',
    'path': '/about'
  },
  {
    'title': 'Contacts',
    'path': '/public/contacts'
  }
];

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer){
    this.matIconRegistry.addSvgIcon(
      "logo",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/T.svg")
    );
  }

  ngOnInit() {
  }

}
