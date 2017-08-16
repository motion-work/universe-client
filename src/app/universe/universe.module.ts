import {NgModule} from '@angular/core';
import {GalaxyModule, galaxyRoutes} from './galaxy/galaxy.module';
import {RouterModule, Routes} from '@angular/router';
import {UniverseComponent} from './universe/universe.component';
import {AuthenticationModule} from '../authentication/authentication.module';
import {AuthGuard} from '../authentication/_services/auth.guard';


export const universeRoutes: Routes = [
  {
    path: '',
    component: UniverseComponent,
    canActivate: [AuthGuard],
    children: [
      {path: '', redirectTo: '/get-started', pathMatch: 'full'},
      ...galaxyRoutes
    ]
  },
];


@NgModule({
  imports: [
    RouterModule.forRoot(universeRoutes),
    AuthenticationModule,
    GalaxyModule
  ],
  declarations: [UniverseComponent],
  providers: [AuthGuard]
})
export class UniverseModule {
}
