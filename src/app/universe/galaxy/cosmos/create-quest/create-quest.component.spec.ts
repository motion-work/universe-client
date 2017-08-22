import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQuestComponent } from './create-quest.component';

describe('CreateQuestComponent', () => {
  let component: CreateQuestComponent;
  let fixture: ComponentFixture<CreateQuestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateQuestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateQuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
