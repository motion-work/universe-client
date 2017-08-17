import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GalaxyComponent} from './galaxy/galaxy.component';
import {CreateGalaxyComponent} from './create-galaxy/create-galaxy.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {GalaxyService} from './_services/galaxy.service';
import {InviteComponent} from './invite/invite.component';
import {AcceptInviteComponent} from './accept-invite/accept-invite.component';
import {CosmosModule, cosmosRoutes} from './cosmos/cosmos.module';
import {GetStartedComponent} from './get-started/get-started.component';
import {GalaxyExistenceGuard} from './_services/galaxy-existence.guard';
import { NavigationComponent } from './navigation/navigation.component';

export const galaxyRoutes: Routes = [
  {path: 'get-started', component: GetStartedComponent},
  {path: 'galaxy/new', component: CreateGalaxyComponent},
  {path: 'invite/accept/:permalink/:token', component: AcceptInviteComponent},
  {
    path: 'galaxy/:permalink',
    component: GalaxyComponent,
    children: [
      {path: 'invite', component: InviteComponent},
      ...cosmosRoutes
    ]
  },
  {path: '**', redirectTo: 'get-started'}
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpModule,
    CosmosModule,
  ],
  declarations: [
    GalaxyComponent,
    CreateGalaxyComponent,
    InviteComponent,
    AcceptInviteComponent,
    GetStartedComponent,
    NavigationComponent
  ],
  providers: [
    GalaxyService,
    GalaxyExistenceGuard
  ]
})
export class GalaxyModule {
}
