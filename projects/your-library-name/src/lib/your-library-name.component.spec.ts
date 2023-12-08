import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourLibraryNameComponent } from './your-library-name.component';

describe('YourLibraryNameComponent', () => {
  let component: YourLibraryNameComponent;
  let fixture: ComponentFixture<YourLibraryNameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YourLibraryNameComponent]
    });
    fixture = TestBed.createComponent(YourLibraryNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
