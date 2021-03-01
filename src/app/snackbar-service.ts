import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private snackbar: MatSnackBar) {}

  open(): void {
    const ref = this.snackbar.open('This is a snackbar', 'Dismiss', {
      duration: 500,
    });

    ref.onAction().subscribe(() => {
      console.log('snackbar dismissed with action');
    });
  }
}
