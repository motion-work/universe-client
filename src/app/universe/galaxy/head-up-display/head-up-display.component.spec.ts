import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadUpDisplayComponent } from './head-up-display.component';

describe('HeadUpDisplayComponent', () => {
  let component: HeadUpDisplayComponent;
  let fixture: ComponentFixture<HeadUpDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadUpDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadUpDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
