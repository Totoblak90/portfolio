import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gradient-circle',
  templateUrl: './gradient-circle.component.html',
  styleUrls: ['./gradient-circle.component.scss'],
})
export class GradientCircleComponent implements OnInit {
  @Input() img: string = '';
  @Input() alt: string = '';

  constructor() {}

  ngOnInit(): void {}
}
