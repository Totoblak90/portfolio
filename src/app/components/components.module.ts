import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GradientCircleComponent } from './gradient-circle/gradient-circle.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent, GradientCircleComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, SidebarComponent, GradientCircleComponent],
})
export class ComponentsModule {}
