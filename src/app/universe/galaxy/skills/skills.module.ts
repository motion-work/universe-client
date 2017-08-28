import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { SkillsComponent } from './skills/skills.component';
import { OverviewComponent } from './overview/overview.component';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import { CreateSkillSetComponent } from './create-skill-set/create-skill-set.component';

export const skillsRoutes: Routes = [
  {
    path: 'skills',
    component: SkillsComponent,
    children: [
      {path: '', redirectTo: 'overview', pathMatch: 'full'},
      {path: 'overview', component: OverviewComponent},
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
  declarations: [SkillsComponent, OverviewComponent, CreateSkillSetComponent]
})
export class SkillsModule { }
