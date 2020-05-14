import { TestBed } from '@angular/core/testing';
import { ShowPostService } from './show-post.service';
import {HttpClientModule} from '@angular/common/http';

describe('LoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({ imports: [
      HttpClientModule
    ],
    providers: [ShowPostService]
  }));
  it('should be created', () => {
    const service: ShowPostService = TestBed.get(ShowPostService);
    expect(service).toBeTruthy();
  });
});
