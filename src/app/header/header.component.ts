import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  /**
   *
   * @param router - router to navigate to user profile page when user clicks on profile icon
   *
   */

  constructor(
    public fetchApiData: FetchApiDataService,
    public snackBar: MatSnackBar,
    public dialog: MatDialogModule,
    public router: Router
  ) {}

  ngOnInit(): void {}

  navToUserProfile() {
    this.router.navigate(['/user-profile']);
  }

  navToMovies() {
    this.router.navigate(['/movies']);
  }

  logOut(): void {
    localStorage.clear(); // clear local storage
    this.router.navigate(['/welcome']);
  }
}
