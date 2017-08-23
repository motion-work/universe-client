import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-quest',
  templateUrl: './create-quest.component.html',
  styleUrls: ['./create-quest.component.scss']
})
export class CreateQuestComponent implements OnInit {

  page = 1;
  formGroup: FormGroup;
  quest = {
    'name': '',
    'type': '',
    'description': '',
    'additional_information': '',
    'start': '',
    'end': '',
  };

  constructor(private fb: FormBuilder) {
    this.formGroup = fb.group({
      'name': [null, Validators.required],
      'type': [null, Validators.required],
      'description': [null, Validators.compose([
        Validators.required,
        Validators.minLength(30),
        Validators.maxLength(2000)
      ])],
      'additional_information': [null, Validators.compose([
        Validators.required,
        Validators.minLength(30),
        Validators.maxLength(2000)
      ])],
      'start': [null, Validators.required],
      'end': [null, Validators.required],
    });
  }

  createQuest() {
    console.log(this.formGroup.value);
  }

  ngOnInit() {
  }

  next() {
    this.page++;
  }

  previous() {
    this.page--;
  }

}
