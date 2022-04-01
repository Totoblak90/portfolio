import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { MyStackComponent } from './pages/my-stack/my-stack.component';
import { MyWorkComponent } from './pages/my-work/my-work.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: WelcomeComponent,
  },
  {
    path: 'about-me',
    component: AboutMeComponent,
  },
  {
    path: 'my-stack',
    component: MyStackComponent,
  },
  {
    path: 'my-work',
    component: MyWorkComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
