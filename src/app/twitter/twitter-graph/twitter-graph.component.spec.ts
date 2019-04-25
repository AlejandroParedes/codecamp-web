import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterGraphComponent } from './twitter-graph.component';

describe('TwitterGraphComponent', () => {
  let component: TwitterGraphComponent;
  let fixture: ComponentFixture<TwitterGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitterGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
