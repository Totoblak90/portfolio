import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public mainImage: string = 'assets/yo.svg';
  public altMessageMainImage: string = 'Foto de perfil';
}
