import { fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { SnackbarService } from './snackbar-service';

describe('snackbar service', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatSnackBarModule, NoopAnimationsModule],
      providers: [SnackbarService],
    }).compileComponents();
  });

  it('should load the snackbar and go away after 1 second (this does NOT work)', (done) => {
    const service = TestBed.inject(SnackbarService);

    expect(document.querySelector('simple-snack-bar')).toBeFalsy();

    service.open();

    expect(document.querySelector('simple-snack-bar')).toBeTruthy();

    setTimeout(() => {
      expect(document.querySelector('simple-snack-bar')).toBeFalsy('oh dear');
      done();
    }, 1000);
  });
});
