import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GalaxyComponent} from './galaxy/galaxy.component';
import {CreateGalaxyComponent} from './create-galaxy/create-galaxy.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {InviteComponent} from './invite/invite.component';
import {AcceptInviteComponent} from './accept-invite/accept-invite.component';
import {CosmosModule, cosmosRoutes} from './cosmos/cosmos.module';
import {GetStartedComponent} from './get-started/get-started.component';
import {GalaxyExistenceGuard} from '../../shared/_services/galaxy-existence.guard';
import {NavigationComponent} from './navigation/navigation.component';
import {HeadUpDisplayComponent} from './head-up-display/head-up-display.component';
import {FreshLoginGuard} from './_services/fresh-login.guard';
import {SkillsModule, skillsRoutes} from './skills/skills.module';
import {SwitchGalaxyComponent} from './switch-galaxy/switch-galaxy.component';
import {SharedModule} from '../../shared/shared.module';

export const galaxyRoutes: Routes = [
  {path: 'get-started', component: GetStartedComponent, canActivate: [FreshLoginGuard]},
  {path: 'galaxy/new', component: CreateGalaxyComponent},
  {path: 'invite/send/:permalink', component: InviteComponent},
  {path: 'invite/accept/:permalink/:token', component: AcceptInviteComponent},
  {
    path: 'galaxy/:permalink',
    component: GalaxyComponent,
    children: [
      {path: '', redirectTo: 'cosmos', pathMatch: 'full'},
      ...cosmosRoutes,
      ...skillsRoutes
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
    SkillsModule,
    SharedModule
  ],
  declarations: [
    GalaxyComponent,
    CreateGalaxyComponent,
    InviteComponent,
    AcceptInviteComponent,
    GetStartedComponent,
    NavigationComponent,
    HeadUpDisplayComponent,
    SwitchGalaxyComponent
  ],
  providers: [
    GalaxyExistenceGuard,
    FreshLoginGuard,
  ]
})
export class GalaxyModule {
}
