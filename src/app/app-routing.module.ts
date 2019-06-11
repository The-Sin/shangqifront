import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';
import { AuthGuard } from './services/auth.guard';
import { SettingsComponent } from './users/settings/settings.component';
import { ListComponent } from './users/list/list.component';


export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/dashboard/dashboard1', pathMatch: 'full' ,canActivate: [AuthGuard] },
      {
        path: 'dashboard',
        loadChildren: './dashboards/dashboard.module#DashboardModule' ,canActivate: [AuthGuard]
      },
      {
        path: 'starter',
        loadChildren: './starter/starter.module#StarterModule'
      },
      {
        path: 'component',
        loadChildren: './component/component.module#ComponentsModule'
      },
      { path: 'cards', loadChildren: './cards/cards.module#CardsModule' },
      { path: 'icons', loadChildren: './icons/icons.module#IconsModule' },
      { path: 'forms', loadChildren: './form/forms.module#FormModule' },
      { path: 'tables', loadChildren: './table/tables.module#TablesModule' },
      { path: 'charts', loadChildren: './charts/charts.module#ChartModule' },
      {
        path: 'widgets',
        loadChildren: './widgets/widgets.module#WidgetsModule'
      },
      { path: 'ecom', loadChildren: './ecommerce/ecom.module#EcomModule' },
      {
        path: 'timeline',
        loadChildren: './timeline/timeline.module#TimelineModule'
      },
      {
        path: 'extra-component',
        loadChildren:
          './extra-component/extra-component.module#ExtraComponentModule'
      },
      { path: 'apps', loadChildren: './apps/apps.module#AppsModule' },
      {
        path: 'apps/email',
        loadChildren: './apps/email/mail.module#MailModule'
      },
      { path: 'maps', loadChildren: './maps/maps.module#MapsModule' },
      {
        path: 'sample-pages',
        loadChildren: './sample-pages/sample-pages.module#SamplePagesModule'
      },

      { path: 'user/settings/:id', component: SettingsComponent,
      data: {
        title: 'User Edit',
        urls: [
          { title: 'User List', url: '/user/list' },
          { title: 'User Edit' }
        ]
      }
     },
      { path: 'user/list', component: ListComponent , 
      data: {
        title: 'User List',
        urls: [
          { title: 'Dashboard', url: '/dashboard' },
          { title: 'User List' }
        ]
      }},

    ]
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'authentication',
        loadChildren:
          './authentication/authentication.module#AuthenticationModule'
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/authentication/404'
  }
];
