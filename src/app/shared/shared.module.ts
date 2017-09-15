import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GalaxyService} from './_services/galaxy.service';
import {UserService} from './_services/user.service';
import {SkillSetService} from './_services/skill-set.service';
import {SearchService} from './_services/search.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    GalaxyService,
    UserService,
    SkillSetService,
    SearchService,
  ]
})
export class SharedModule { }
