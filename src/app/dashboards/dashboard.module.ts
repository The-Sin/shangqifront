import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { ChartistModule } from 'ng-chartist';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CalendarModule, CalendarDateFormatter } from 'angular-calendar';

import { DashboardRoutes } from './dashboard.routing';

import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { Dashboard3Component } from './dashboard3/dashboard3.component';

import {
  InfocardComponent,
  ChatComponent,
  CommentComponent,
  TopsellComponent,
  ActivityComponent,
  BrowserStatsComponent,
  DeviceVisitsComponent,
  EarningsComponent,
  FeedsComponent,
  InfoBoxComponent,
  MixstatsComponent,
  ProductInfoComponent,
  ProjectComponent,
  ReviewComponent,
  SalesComponent,
  SalesIncomeComponent,
  TasklistComponent,
  UserProfileComponent,
  UserDetailsComponent,
  VisitorsComponent,
  VisitsBounceComponent,
  WeathercardComponent,
  WelcomeComponent
} from './dashboard-components';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    NgbModule,
    ChartsModule,
    ChartistModule,
    RouterModule.forChild(DashboardRoutes),
    PerfectScrollbarModule,
    CalendarModule.forRoot(),
    NgxChartsModule,
    NgxDatatableModule
  ],
  declarations: [
    Dashboard1Component,
    Dashboard2Component,
    Dashboard3Component,
    InfocardComponent,
    ChatComponent,
    CommentComponent,
    TopsellComponent,
    ActivityComponent,
    BrowserStatsComponent,
    DeviceVisitsComponent,
    EarningsComponent,
    FeedsComponent,
    InfoBoxComponent,
    MixstatsComponent,
    ProductInfoComponent,
    ProjectComponent,
    ReviewComponent,
    SalesComponent,
    SalesIncomeComponent,
    TasklistComponent,
    UserProfileComponent,
    UserDetailsComponent,
    VisitorsComponent,
    VisitsBounceComponent,
    WeathercardComponent,
    WelcomeComponent
  ]
})
export class DashboardModule {}
