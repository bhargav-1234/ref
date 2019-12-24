import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ThirdComponent } from './components/third/third.component';
import { FourthComponent } from './components/fourth/fourth.component';
import { FiveComponent } from './components/five/five.component';
import { SixComponent } from './components/six/six.component';
import { SevenComponent } from './components/seven/seven.component';
import { EightComponent } from './components/eight/eight.component';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavbarComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent ,
    FourthComponent,
    FiveComponent,
    SixComponent,
    SevenComponent,
    EightComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
