import { Component, OnInit, Input } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login-form',
  templateUrl: './user-login-form.component.html',
  styleUrls: ['./user-login-form.component.scss'],
})
export class UserLoginFormComponent implements OnInit {
  @Input() userData = { Username: '', Password: '' };

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserLoginFormComponent>,
    public snackBar: MatSnackBar,
    public router: Router
  ) {}

  ngOnInit(): void {}
  loginUser(): void {
    this.fetchApiData.userLogin(this.userData).subscribe(
      (response) => {
        // Logic for a successful user login goes here!
        console.log(response);
        localStorage.setItem('user', response.user.Username);
        localStorage.setItem('token', response.token);
        this.dialogRef.close(); // Close the modal on success!
        this.snackBar.open('user logged in successfully!', 'OK', {
          duration: 2000,
        });
        this.router.navigate(['movies']);
      },
      (response) => {
        console.log('response-data', response);
        this.snackBar.open('User login failed', 'OK', {
          duration: 2000,
        });
      }
    );
  }
}
