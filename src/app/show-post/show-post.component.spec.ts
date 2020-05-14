import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {ShowPostComponent} from './show-post.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {ShowPostService} from './show-post.service';
import {CommonService} from '../service/common.service';

describe('ShowPostComponent', () => {
  let component: ShowPostComponent;
  let fixture: ComponentFixture<ShowPostComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientModule
      ],
      declarations: [ ShowPostComponent ],
      providers: [ShowPostService, CommonService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create ShowPostComponent', () => {
    expect(component).toBeTruthy();
  });
});
