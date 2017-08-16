import { NgModule } from '@angular/core';
import { CosmosComponent } from './cosmos/cosmos.component';
import {RouterModule, Routes} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

export const cosmosRoutes: Routes = [
  {
    path: 'cosmos',
    component: CosmosComponent,
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
    CosmosComponent
  ],
})
export class CosmosModule { }
