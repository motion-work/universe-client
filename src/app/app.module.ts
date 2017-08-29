import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {AuthenticationModule} from './authentication/authentication.module';
import {UniverseModule, universeRoutes} from './universe/universe.module';

const appRoutes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      ...universeRoutes
    ]
  },
  {path: '**', redirectTo: '/', pathMatch: 'full'}
];


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    UniverseModule,
    AuthenticationModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
