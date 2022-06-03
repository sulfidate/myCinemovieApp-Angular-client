import { Component } from '@angular/core';
import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';
import { UserLoginFormComponent } from './user-login-form/user-login-form.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'myCinemovieApp-Angular-client';

  constructor(public dialog: MatDialog) {}
  // This is the function responsible for opening the register dialog when the user clicks the button
  openUserRegistrationDialog(): void {
    this.dialog.open(UserRegistrationFormComponent, {
      // Assign the data to the dialog
      width: '280px',
      data: {
        userData: { Username: '', Password: '', Email: '', Birthday: '' },
      },
    });
  }
  // This is the function responsible for opening the login dialog when the user clicks the button
  openUserLoginDialog(): void {
    this.dialog.open(UserLoginFormComponent, {
      // Assign the data to the dialog
      width: '280px',
      data: {
        userData: { Username: '', Password: '' },
      },
    });
  }
}
