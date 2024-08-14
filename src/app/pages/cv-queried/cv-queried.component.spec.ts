import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvQueriedComponent } from './cv-queried.component';

describe('CvQueriedComponent', () => {
  let component: CvQueriedComponent;
  let fixture: ComponentFixture<CvQueriedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvQueriedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvQueriedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
