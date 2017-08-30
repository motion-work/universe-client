import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {GalaxyService} from '../../_services/galaxy.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-skill-set',
  templateUrl: './create-skill-set.component.html',
  styleUrls: ['./create-skill-set.component.scss']
})
export class CreateSkillSetComponent implements OnInit {


  page = 1;
  formGroup: FormGroup;

  constructor(private fb: FormBuilder,
              private galaxyService: GalaxyService,
              private router: Router) {
  }

  ngOnInit() {
    this.formGroup = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      tags: this.fb.array([]),
      skills: this.fb.array([
        this.initSetItems(),
      ])
    });
  }

  createSkillSet() {
    this.galaxyService.storeSkillSet(this.formGroup.value)
      .subscribe(response => {
        this.router.navigate(['explore']);
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

  addTag(name) {
    this.formArrayTags.push(new FormControl(name, Validators.required));
  }

  removeTag(i: number) {
    this.formArrayTags.removeAt(i);
  }

  /**
   * Remove skill set item
   */
  removeSkill(i: number) {
    this.formArraySkills.removeAt(i);
  }

  get formArrayTags() {
    return <FormArray>this.formGroup.get('tags');
  }

  get formArraySkills() {
    return <FormArray>this.formGroup.get('skills');
  }

}
