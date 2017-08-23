import {NgModule} from '@angular/core';
import {CosmosComponent} from './cosmos/cosmos.component';
import {RouterModule, Routes} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {OverviewComponent} from './overview/overview.component';
import {CreateQuestComponent} from './create-quest/create-quest.component';

export const cosmosRoutes: Routes = [
  {
    path: 'cosmos',
    component: CosmosComponent,
    children: [
      {path: '', redirectTo: 'overview', pathMatch: 'full'},
      {path: 'overview', component: OverviewComponent},
    ]
  },
];


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule,
  ],
  declarations: [
    CosmosComponent,
    OverviewComponent,
    CreateQuestComponent
  ],
})
export class CosmosModule {
}
