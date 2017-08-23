import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSkillSetComponent } from './create-skill-set.component';

describe('CreateSkillSetComponent', () => {
  let component: CreateSkillSetComponent;
  let fixture: ComponentFixture<CreateSkillSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSkillSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSkillSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
