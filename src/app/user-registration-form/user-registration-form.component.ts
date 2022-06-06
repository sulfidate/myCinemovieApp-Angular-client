import { Component, OnInit, Input } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.scss'],
})
export class UserRegistrationFormComponent implements OnInit {
  @Input() userData = { Username: '', Password: '', Email: '', Birthday: '' };

  /**
   * @param dialogRef
   * @param fetchApiData
   * @param snackBar
   */

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserRegistrationFormComponent>,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  /**
   * Function responsible for sending the form inputs to the backend to create a new user
   * @returns alert indicating successfull registration or an error message
   */
  registerUser(): void {
    this.fetchApiData.userRegistration(this.userData).subscribe(
      (response) => {
        // console.log('response-data', response);
        this.dialogRef.close(); // Close the modal on success!
        this.snackBar.open('user registered successfully!', 'OK', {
          duration: 3000,
        });
      },
      (response) => {
        // console.log('response-data', response);
        this.snackBar.open(response, 'OK', {
          duration: 3000,
        });
      }
    );
  }
}
