import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleTiendaPage } from './detalle-tienda.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleTiendaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleTiendaPageRoutingModule {}
