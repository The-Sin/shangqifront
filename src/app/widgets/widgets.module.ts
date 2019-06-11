import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WidgetRoutes } from './widgets.routing';
import { WidgetappComponent } from './apps/widget-app.component';
import { WidgetdataComponent } from './data/widget-data.component';

@NgModule({
  imports: [RouterModule.forChild(WidgetRoutes)],
  declarations: [WidgetappComponent, WidgetdataComponent]
})
export class WidgetsModule {}
