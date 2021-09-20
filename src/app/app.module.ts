import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MatIconModule } from '@angular/material/icon';

import { MainAppComponent } from './main/main.component';
import { NgbdCarouselBasic } from './carousel-component/carousel-basic';
import { TopBarComponent } from './top-bar-component/top-bar.component';
import { BottomBarComponent } from './bottom-bar-component/bottom-bar.component';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [BrowserModule, NgbModule, MatIconModule, AppRoutingModule],
  declarations: [
    NgbdCarouselBasic,
    TopBarComponent,
    MainAppComponent,
    BottomBarComponent,
    AppComponent,
  ],
  exports: [
    NgbdCarouselBasic,
    TopBarComponent,
    MainAppComponent,
    BottomBarComponent,
    AppComponent,
  ],
  bootstrap: [AppComponent],
})
export class MainAppModule {}
