import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GalaxyService} from '../../_services/galaxy.service';

@Component({
  selector: 'app-create-skill-set',
  templateUrl: './create-skill-set.component.html',
  styleUrls: ['./create-skill-set.component.scss']
})
export class CreateSkillSetComponent implements OnInit {

  page = 1;
  formGroup: FormGroup;

  constructor(private fb: FormBuilder, private galaxyService: GalaxyService) {
  }

  ngOnInit() {
    this.formGroup = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      skills: this.fb.array([
        this.initSetItems(),
      ])
    });
  }

  createSkillSet() {
    this.galaxyService.storeSkillSet(this.formGroup.value)
      .subscribe(response => {
        console.log('skill set created!');
      });
  }

  next() {
    this.page++;
  }

  back() {
    this.page--;
  }

  initSetItems() {
    return this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  /**
   * Add skill set item
   */
  addSkill() {
    this.formArraySkills.push(this.initSetItems());
  }

  /**
   * Remove skill set item
   */
  removeSkill(i: number) {
   this.formArraySkills.removeAt(i);
  }

  get formArraySkills() {
    return <FormArray>this.formGroup.get('skills');
  }

}
