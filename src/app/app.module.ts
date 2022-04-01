import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { MyStackComponent } from './pages/my-stack/my-stack.component';
import { MyWorkComponent } from './pages/my-work/my-work.component';

@NgModule({
  declarations: [AppComponent, WelcomeComponent, AboutMeComponent, MyStackComponent, MyWorkComponent],
  imports: [BrowserModule, AppRoutingModule, ComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
