import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGalaxyComponent } from './create-galaxy.component';

describe('CreateGalaxyComponent', () => {
  let component: CreateGalaxyComponent;
  let fixture: ComponentFixture<CreateGalaxyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateGalaxyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGalaxyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
