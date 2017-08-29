import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SkillsComponent} from './skills/skills.component';
import {OverviewComponent} from './overview/overview.component';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {CreateSkillSetComponent} from './create-skill-set/create-skill-set.component';
import {ExploreComponent} from './explore/explore.component';
import { LimitToPipe} from './_pipes/limit-to.pipe';

export const skillsRoutes: Routes = [
  {
    path: 'skills',
    component: SkillsComponent,
    children: [
      {path: '', redirectTo: 'overview', pathMatch: 'full'},
      {path: 'overview', component: OverviewComponent},
      {path: 'explore', component: ExploreComponent},
      {path: 'create', component: CreateSkillSetComponent},
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
    SkillsComponent,
    OverviewComponent,
    CreateSkillSetComponent,
    ExploreComponent,
    LimitToPipe,
  ]
})
export class SkillsModule {
}
