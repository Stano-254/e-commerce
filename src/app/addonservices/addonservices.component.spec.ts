import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddonservicesComponent } from './addonservices.component';

describe('AddonservicesComponent', () => {
  let component: AddonservicesComponent;
  let fixture: ComponentFixture<AddonservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddonservicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddonservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
