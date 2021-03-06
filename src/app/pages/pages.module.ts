import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from "@angular/forms";
import { ChartsModule } from 'ng2-charts';


import { DashboardComponent } from "./dashboard/dashboard.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { ProgressComponent } from "./progress/progress.component";
import { PagesComponent } from "./pages.component";
import { PagesRoutingModule } from "./pages-routing.module";

//temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    Graficas1Component,
    ProgressComponent,
    IncrementadorComponent,
    GraficoDonaComponent,
    AccountSettingsComponent
  ],
  exports: [DashboardComponent, Graficas1Component, ProgressComponent],
  imports: [SharedModule, PagesRoutingModule, FormsModule, ChartsModule]
})
export class PagesModule {}
