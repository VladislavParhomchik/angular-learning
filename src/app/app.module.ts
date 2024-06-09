import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MyCalculatorModule } from './calculator/my-calculator.module';
import { MyNavigation } from './components/navigation/navigation.component';
import { MyEmptyPage } from './components/empty-route/empty-route.component';
import { DirectivesModule } from './directives/directives.module';


@NgModule({
  declarations: [
    AppComponent,
    MyNavigation,
    MyEmptyPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MyCalculatorModule,
    DirectivesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
