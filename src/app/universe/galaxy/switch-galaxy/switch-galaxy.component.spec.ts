import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchGalaxyComponent } from './switch-galaxy.component';

describe('SwitchGalaxyComponent', () => {
  let component: SwitchGalaxyComponent;
  let fixture: ComponentFixture<SwitchGalaxyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchGalaxyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchGalaxyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
