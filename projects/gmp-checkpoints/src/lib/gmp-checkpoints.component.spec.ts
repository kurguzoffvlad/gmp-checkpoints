import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmpCheckpointsComponent } from './gmp-checkpoints.component';

describe('GmpCheckpointsComponent', () => {
  let component: GmpCheckpointsComponent;
  let fixture: ComponentFixture<GmpCheckpointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmpCheckpointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmpCheckpointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
