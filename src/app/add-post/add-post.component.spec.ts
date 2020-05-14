import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AddPostComponent} from './add-post.component';
import {AddPostService} from './add-post.service';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CommonService} from '../service/common.service';


describe('AddPostComponent', () => {
  let component: AddPostComponent;
  let fixture: ComponentFixture<AddPostComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientModule
      ],
      declarations: [AddPostComponent],
      providers: [AddPostService, CommonService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create AddPostComponent', () => {
    expect(component).toBeTruthy();
  });
});
