import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  public mainImage: string = 'assets/yo.svg';
  public altMessageMainImage: string = 'Foto de perfil';

  constructor() {}

  ngOnInit(): void {}
}
