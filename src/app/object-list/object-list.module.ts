import { NgModule } from '@angular/core';
import { MyobjectListComponent } from './components/list/object-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { MyObjectItemComponent } from './components/item/object-item.component';
import { CommonModule } from '@angular/common';
import { MyObjectListRouting } from './object-list-routing.module';

@NgModule({
    imports: [CommonModule, MyObjectListRouting],
    exports: [MyobjectListComponent, MyObjectItemComponent],
    declarations: [MyobjectListComponent, MyObjectItemComponent],
    providers: [],
})
export class MyObjectListModule { }
