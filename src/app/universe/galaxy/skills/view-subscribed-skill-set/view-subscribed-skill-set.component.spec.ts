import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSubscribedSkillSetComponent } from './view-subscribed-skill-set.component';

describe('ViewSubscribedSkillSetComponent', () => {
  let component: ViewSubscribedSkillSetComponent;
  let fixture: ComponentFixture<ViewSubscribedSkillSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSubscribedSkillSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSubscribedSkillSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
