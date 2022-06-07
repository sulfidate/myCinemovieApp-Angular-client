import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';

import { GenreComponent } from '../genre/genre.component';
import { DirectorComponent } from '../director/director.component';
import { StorylineComponent } from '../storyline/storyline.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  movies: any[] = [];
  favoriteMovies: any[] = [];
  user: any = {}; // Change?
  currentUser: any = null; // Change?

  constructor(
    public fetchMovies: FetchApiDataService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getMovies();
    this.getUser();
  }

  /**
   * Get all movies from the API and set the movies state to return the data from the API.
   * @returns Array of movies in JSON format.
   * @function getAllMovies fetches all movies from the API.
   * @memberof MovieCardComponent - getAllMovies
   */
  getMovies(): void {
    this.fetchMovies.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      // console.log(this.movies);
      return this.movies;
    });
  }

  /**
   * Get the current user data from the API and set the user state to return the data from the API.
   * @returns User data in JSON format.
   * @returns Array of Favorite Movies in JSON format.
   * @function getUser fetches the current user from the API.
   * @memberof MovieCardComponent - getUser
   * @todo Add a check to see if the user is logged in.
   * @todo - Add Favorite Movies to the local storage.
   */
  getUser(): void {
    localStorage.getItem('user');
    this.fetchMovies.getUser().subscribe((resp: any) => {
      this.currentUser = resp.Username;
      this.favoriteMovies = resp.FavoriteMovies;
    });
  }

  /**
   * Dialog to display the Genre details.
   * @param name - The genre to display the details.
   * @param description - The description of the genre.
   * @returns Boolean - True if the dialog is displayed.
   * @function openGenreDialog - Opens the dialog to display the Genre details.
   * @memberof MovieCardComponent - openGenreDialog
   */
  openGenreDialog(name: string, description: string): void {
    this.dialog.open(GenreComponent, {
      width: '500px',
      data: {
        Name: name,
        Description: description,
      },
    });
  }

  /**
   * Dialog to display the Director details.
   * @param name - The director to display the details.
   * @param bio - The description of the director.
   * @param birth - The birth date of the director.
   * @param death - The death date of the director.
   * @param image - The image of the director.
   * @returns Boolean - True if the dialog is displayed.
   * @function openDirectorDialog - Opens the dialog to display the Director details.
   * @memberof MovieCardComponent - openDirectorDialog
   */
  openDirectorDialog(
    name: string,
    bio: string,
    birth: Date,
    death: Date,
    image_url: string
  ): void {
    this.dialog.open(DirectorComponent, {
      width: '500px',
      data: {
        Name: name,
        Bio: bio,
        Birth: birth,
        Death: death,
        Image_url: image_url,
      },
    });
  }

  /**
   * Dialog to display the Storyline details.
   * @param description - The description of the storyline.
   * @returns Boolean - True if the dialog is displayed.
   * @function openStorylineDialog - Opens the dialog to display the Storyline details.
   * @memberof MovieCardComponent - openStorylineDialog
   */
  openStorylineDialog(description: string): void {
    this.dialog.open(StorylineComponent, {
      width: '500px',
      data: {
        Description: description,
      },
    });
  }

  /**
   * check if the movie is in the favorite movies array.
   * @param movie - The movie to check.
   * @returns Boolean - True if the movie is in the favorite movies array.
   * @function isFav - Checks if the movie is in the favorite movies array.
   */
  isFav(movie: any): boolean {
    if (this.favoriteMovies.includes(movie)) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Add a movie to the favorite movies array.
   * @param movie - The movie to add.
   * @returns Boolean - True if the movie is added to the favorite movies array.
   * @function addFavoriteMovie - Adds a movie to the favorite movies array.
   * @memberof MovieCardComponent - addFavoriteMovie
   */
  addToFavoriteMovies(movie: any): void {
    this.fetchMovies.addFavoriteMovie(movie).subscribe((resp: any) => {
      this.snackBar.open('Movie added to favorites', '', {
        duration: 2000,
      });
      this.ngOnInit();
    });
  }

  /**
   * Remove a movie from the favorite movies array.
   * @param movie - The movie to remove.
   * @returns Boolean - True if the movie is removed from the favorite movies array.
   * @function removeFavoriteMovie - Removes a movie from the favorite movies array.
   * @memberof MovieCardComponent - removeFavoriteMovie
   */
  removeFromFavoriteMovies(movie: any): void {
    this.fetchMovies.removeFavoriteMovie(movie).subscribe((resp: any) => {
      this.snackBar.open('Movie removed from favorites', '', {
        duration: 2000,
      });
      this.ngOnInit();
    });
  }
}
