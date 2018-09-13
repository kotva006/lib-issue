import { async, TestBed } from '@angular/core/testing';
import { XyzModule } from './xyz.module';

describe('XyzModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [XyzModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(XyzModule).toBeDefined();
  });
});
