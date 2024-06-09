import { NgModule } from '@angular/core';
import { MyCalculatorComponent } from './components/my-calculator/my-calculator.component';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [FormsModule, BrowserModule, CommonModule],
    exports: [MyCalculatorComponent],
    declarations: [MyCalculatorComponent],
    providers: [],
})
export class MyCalculatorModule { }
