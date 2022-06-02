import { Component, OnInit, Input } from '@angular/core';

// You'll use this import to close the dialog on success
import { MatDialogRef } from '@angular/material/dialog';

// This import brings in the API we'll use to register a user
import { UserRegistrationService } from '../fetch-api-data.service';

// This import is used to display notifications back to the user
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.scss'],
})
export class UserRegistrationFormComponent implements OnInit {
  @Input() userData = { Username: '', Password: '', Email: '', Birthday: '' };

  /**
   *
   * @param dialogRef
   * @param fetchApiData
   * @param snackBar
   */

  constructor(
    public dialogRef: MatDialogRef<UserRegistrationFormComponent>,
    public fetchApiData: UserRegistrationService,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  // This is the function responsible for sending the form inputs to the backend
  /**
   * Function responsible for sending the form inputs to the backend to create a new user
   * @returns alert indicating successfull registration or an error message
   */
  registerUser(): void {
    this.fetchApiData.userRegistration(this.userData).subscribe(
      (result) => {
        // LOgic for a successful user registration goes here! (To be implemented)
        console.log(result);
        this.dialogRef.close(); // Close the modal on success!
        this.snackBar.open('Registration successful!', 'OK', {
          duration: 3000,
        });
      },
      (result) => {
        this.snackBar.open('Registration failed!', '', { duration: 3000 });
      }
    );
  }
}
