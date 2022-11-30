import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LicoresPageRoutingModule } from './licores-routing.module';

import { LicoresPage } from './licores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LicoresPageRoutingModule
  ],
  declarations: [LicoresPage]
})
export class LicoresPageModule {}
