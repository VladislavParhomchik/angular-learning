import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyCalculatorComponent } from './calculator/components/my-calculator/my-calculator.component';
import { MyNavigation } from './components/navigation/navigation.component';
import { MyEmptyPage } from './components/empty-route/empty-route.component';
import { DirectivesPageComponent } from './directives/directives.component';
import { DirectivesModule } from './directives/directives.module';

const routes: Routes = [
  {
    path: 'calculator',
    component: MyCalculatorComponent
  },
  {
    path: '',
    redirectTo: 'calculator',
    pathMatch: 'full'
  },
  {
    path: 'object-list',
    loadChildren: () => import('./object-list/object-list.module').then((m) => m.MyObjectListModule)
  },
  {
    path: 'directives',
    loadChildren: () => import('./directives/directives.module').then((m) => m.DirectivesModule)
  },
  {
    path: '**',
    component: MyEmptyPage
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
