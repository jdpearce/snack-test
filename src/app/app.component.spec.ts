import { TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatSnackBarModule, NoopAnimationsModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should load the snackbar and go away after 1 second (this works)', (done) => {
    const fixture = TestBed.createComponent(AppComponent);

    const button = fixture.debugElement.query(By.css('button'));

    button.nativeElement.click();

    expect(document.querySelector('simple-snack-bar')).toBeTruthy();

    setTimeout(() => {
      expect(document.querySelector('simple-snack-bar')).toBeFalsy();
      done();
    }, 1000);
  });
});
