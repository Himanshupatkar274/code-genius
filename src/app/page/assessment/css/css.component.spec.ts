import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssComponent } from './css.component';

describe('CssComponent', () => {
  let component: CssComponent;
  let fixture: ComponentFixture<CssComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CssComponent]
    });
    fixture = TestBed.createComponent(CssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
