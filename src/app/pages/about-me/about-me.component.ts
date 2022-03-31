import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent implements OnInit {
  public mainImage: string = 'assets/yo.svg';
  public altMessageMainImage: string = 'Foto de perfil';

  constructor() {}

  ngOnInit(): void {}
}
