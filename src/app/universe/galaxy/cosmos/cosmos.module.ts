import {NgModule} from '@angular/core';
import {CosmosComponent} from './cosmos/cosmos.component';
import {RouterModule, Routes} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {OverviewComponent} from './overview/overview.component';

export const cosmosRoutes: Routes = [
  {
    path: 'cosmos',
    component: CosmosComponent,
    children: [
      {path: '', redirectTo: 'overview', pathMatch: 'full'},
      {path: 'overview', component: OverviewComponent}
    ]
  },
];


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpModule,
  ],
  declarations: [
    CosmosComponent,
    OverviewComponent
  ],
})
export class CosmosModule {
}
