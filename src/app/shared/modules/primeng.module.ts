import { NgModule } from '@angular/core';
import { DataViewModule } from 'primeng/dataview';
import { PanelModule } from 'primeng/panel';
import { TabViewModule } from 'primeng/tabview';
@NgModule({
  imports: [DataViewModule, PanelModule, TabViewModule],
  exports: [DataViewModule, PanelModule, TabViewModule]
})
export class PrimengModule {}
