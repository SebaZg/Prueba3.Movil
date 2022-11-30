import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LicoresPage } from './licores.page';

const routes: Routes = [
  {
    path: '',
    component: LicoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LicoresPageRoutingModule {}
