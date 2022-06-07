import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  user: any = {};

  constructor(
    public fetchMovies: FetchApiDataService,
    public router: Router,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) {}
  ngOnInit(): void {
    this.getUser();
  }

  /**
   * Making the api call for the get user endpoint to get the user details from the database and store it in the user variable
   * @returns user - the user details
   * @memberof UserProfileComponent
   */
  getUser(): void {
    this.fetchMovies.getUser().subscribe((resp: any) => {
      this.user = resp;
      // console.log(this.user);
      return this.user;
    });
  }

  /**
   * Making the api call for the update user endpoint to update the user details in the database
   * @param user - the user details
   * @memberof UserProfileComponent
   * @returns user - the user details
   */
  updateUser(user: any): void {
    this.fetchMovies.editUser(user).subscribe((resp: any) => {
      this.user = resp;
      // console.log(this.user);
      return this.user;
    });
  }

  /**
   * Making the api call for the delete user endpoint to delete the user details from the database
   * @param user - the user details
   * @memberof UserProfileComponent
   *  @returns user - the user details
   */
  deleteUser(user: any): void {
    if (confirm('Are you sure you want to delete your account?')) {
      this.fetchMovies.deleteUser(user).subscribe((resp: any) => {
        this.user = resp;
        // console.log(this.user);
        return this.user;
      });
      this.snackBar.open('Account deleted successfully', '', {
        duration: 3000,
      });
      localStorage.removeItem('token');
      this.router.navigate(['/']);
    } else {
      this.snackBar.open('Account not deleted', '', {
        duration: 3000,
      });
    }
  }

  /** Making the api call for the logout user endpoint to logout the user from the database
   * @memberof UserProfileComponent
   * @returns user - the user details
   */
  logoutUser(): void {
    this.fetchMovies.logoutUser().subscribe((resp: any) => {
      this.user = resp;
      // console.log(this.user);
      return this.user;
    });
    this.router.navigate(['/']);
    this.snackBar.open('Logged out successfully', '', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
    });
    localStorage.removeItem('token');
  }

  /**
   * Making the api call for the edit user endpoint to open the edit profile dialog box
   * @memberof UserProfileComponent
   * @returns user - the user details
   */
  openEditProfileDialog(): void {
    const dialogRef = this.dialog.open(EditProfileComponent, {
      width: '500px',
      data: {
        user: this.user,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.updateUser(result);
        this.getUser();
      }
    });
  }
}
