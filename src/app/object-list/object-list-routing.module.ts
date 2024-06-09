import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyobjectListComponent } from './components/list/object-list.component';
import { MyObjectItemComponent } from './components/item/object-item.component';

const routes: Routes = [
  {
    path: '',
    component: MyobjectListComponent
  },
  {
    path: ':id',
    component: MyObjectItemComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyObjectListRouting { }
