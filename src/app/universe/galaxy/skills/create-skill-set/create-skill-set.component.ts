import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {GalaxyService} from '../../../../shared/_services/galaxy.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-skill-set',
  templateUrl: './create-skill-set.component.html',
  styleUrls: ['./create-skill-set.component.scss']
})
export class CreateSkillSetComponent implements OnInit {

  url = 'https://suggestqueries.google.com/complete/search';
  params = {
    hl: 'en',
    ds: 'yt',
    xhr: 't',
    client: 'youtube',
  };
  search = '';
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
        this.initSetSkills(),
      ])
    });
  }

  handleResultSelected(result) {
    this.search = result;
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

  initSetSkills() {
    return this.fb.group({
      title: ['', [Validators.required]],
      subitems: this.fb.array([
        this.initSubitems()
      ])
    });
  }

  initSubitems() {
    return this.fb.group({
      title: ['', [Validators.required]],
      description: [''],
    });
  }

  /**
   * Add skill set item
   */
  addSkill() {
    this.formArraySkills.push(this.initSetSkills());
  }

  addSubitem(i) {
    this.formArraySubitems(i).push(this.initSubitems());
  }

  removeSubitem(chapterIndex: number, i: number) {
    this.formArraySubitems(chapterIndex).removeAt(i);
  }

  addTag() {
    if (this.search !== '') {
      this.formArrayTags.push(new FormControl(this.search, Validators.required));
      this.search = '';
    }
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
    return this.formGroup.get('tags') as FormArray;
  }

  formArraySubitems(i: number) {
    return (this.formGroup.get('skills') as FormArray).at(i).get('subitems') as FormArray;
  }

  get formArraySkills() {
    return this.formGroup.get('skills') as FormArray;
  }

}
