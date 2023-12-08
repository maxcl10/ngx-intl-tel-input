import { TestBed } from '@angular/core/testing';

import { YourLibraryNameService } from './your-library-name.service';

describe('YourLibraryNameService', () => {
  let service: YourLibraryNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YourLibraryNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
