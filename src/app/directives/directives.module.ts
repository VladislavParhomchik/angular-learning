import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesPageComponent } from './directives.component';
import { DirectivesRouting } from './directives-routing.module';
import { MyChangeColorDirectiveDirective } from './directive/my-change-color-directive.directive';
import { MyIfDirectiveDirective } from './directive/my-if-directive.directive';


@NgModule({
    imports: [CommonModule, DirectivesRouting],
    exports: [],
    declarations: [DirectivesPageComponent, MyChangeColorDirectiveDirective, MyIfDirectiveDirective],
    providers: [],
})
export class DirectivesModule { }
