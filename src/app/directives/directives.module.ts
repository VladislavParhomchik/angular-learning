import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesPageComponent } from './directives.component';
import { DirectivesRouting } from './directives-routing.module';


@NgModule({
    imports: [CommonModule, DirectivesRouting],
    exports: [],
    declarations: [DirectivesPageComponent],
    providers: [],
})
export class DirectivesModule { }
