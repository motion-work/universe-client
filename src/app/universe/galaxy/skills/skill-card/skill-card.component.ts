import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.scss']
})
export class SkillCardComponent implements OnInit {

  @Input() skillSet: {};


  constructor() {
  }

  ngOnInit() {
  }

}
