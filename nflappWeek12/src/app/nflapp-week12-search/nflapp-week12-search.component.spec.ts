import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NflappWeek12SearchComponent } from './nflapp-week12-search.component';

describe('NflappWeek12SearchComponent', () => {
  let component: NflappWeek12SearchComponent;
  let fixture: ComponentFixture<NflappWeek12SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NflappWeek12SearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NflappWeek12SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
