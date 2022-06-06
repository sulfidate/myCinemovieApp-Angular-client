import { Component, OnInit } from '@angular/core';
import { UserRegistrationFormComponent } from '../user-registration-form/user-registration-form.component';
import { UserLoginFormComponent } from '../user-login-form/user-login-form.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss'],
})
export class WelcomePageComponent implements OnInit {
  title = 'Welcome';
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  /**
   * function for opening the register dialog when the user clicks the signup button
   */
  openUserRegistrationDialog(): void {
    this.dialog.open(UserRegistrationFormComponent, {
      // Assign dialog width
      width: '280px',
      // Assign the data to the dialog
      data: {
        userData: { Username: '', Password: '', Email: '', Birthday: '' },
      },
    });
  }

  /**
   * function for opening the login dialog when the user clicks the login button
   */
  openUserLoginDialog(): void {
    this.dialog.open(UserLoginFormComponent, {
      // Assign dialog width
      width: '280px',
      // Assign the data to the dialog
      data: {
        userData: { Username: '', Password: '' },
      },
    });
  }
}
