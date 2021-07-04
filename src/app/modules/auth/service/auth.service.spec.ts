import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from './auth.service';
import { StoreModule } from '@ngrx/store';
import { Store } from '@ngrx/store';

describe('AuthService', () => {
  let service: AuthService;
  let route: ActivatedRoute;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule,StoreModule,Store]
    });
    service = TestBed.inject(AuthService);
  });

  
});
