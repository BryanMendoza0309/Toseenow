import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleTiendaPageRoutingModule } from './detalle-tienda-routing.module';

import { DetalleTiendaPage } from './detalle-tienda.page';
import { ComponentsModule } from '../components/components.module';
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleTiendaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DetalleTiendaPage]
})
export class DetalleTiendaPageModule {}
