import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinalRoutingModule } from './final-routing.module';
import { FinalComponent } from './final.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [FinalComponent],
  imports: [
    CommonModule,
    FinalRoutingModule,
    FlexLayoutModule
  ]
})
export class FinalModule { }
