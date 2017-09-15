import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SkillsComponent} from './skills/skills.component';
import {OverviewComponent} from './overview/overview.component';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {CreateSkillSetComponent} from './create-skill-set/create-skill-set.component';
import {ExploreComponent} from './explore/explore.component';
import {LimitToPipe} from './_pipes/limit-to.pipe';
import {NgxTypeaheadModule} from 'ngx-typeahead';
import {ViewSkillSetComponent} from './view-skill-set/view-skill-set.component';
import {ViewSubscribedSkillSetComponent} from './view-subscribed-skill-set/view-subscribed-skill-set.component';
import { SkillCardComponent } from './skill-card/skill-card.component';

export const skillsRoutes: Routes = [
  {
    path: 'skills',
    component: SkillsComponent,
    children: [
      {path: '', redirectTo: 'my-skills', pathMatch: 'full'},
      {path: 'my-skills', component: OverviewComponent},
      {path: 'my-skills/subscribed/:permalink', component: ViewSubscribedSkillSetComponent},
      {path: 'explore', component: ExploreComponent},
      {path: 'explore/:permalink', component: ViewSkillSetComponent},
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
    NgxTypeaheadModule
  ],
  declarations: [
    SkillsComponent,
    OverviewComponent,
    CreateSkillSetComponent,
    ExploreComponent,
    LimitToPipe,
    ViewSkillSetComponent,
    ViewSubscribedSkillSetComponent,
    SkillCardComponent,
  ]
})
export class SkillsModule {
}
