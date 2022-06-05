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
  user: any = {};
  currentUser: any = null;

  constructor(
    public fetchMovies: FetchApiDataService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getMovies();
    this.getUser();
  }

  getMovies(): void {
    this.fetchMovies.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      console.log(this.movies);
      return this.movies;
    });
  }

  openGenreDialog(name: string, description: string): void {
    this.dialog.open(GenreComponent, {
      width: '500px',
      data: {
        Name: name,
        Description: description,
      },
    });
  }

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

  openStorylineDialog(description: string): void {
    this.dialog.open(StorylineComponent, {
      width: '500px',
      data: {
        Description: description,
      },
    });
  }

  getUser(): void {
    localStorage.getItem('user');
    this.fetchMovies.getUser().subscribe((resp: any) => {
      this.currentUser = resp.Username;
      this.favoriteMovies = resp.FavoriteMovies;
    });
  }

  isFav(movie: any): boolean {
    if (this.favoriteMovies.includes(movie)) {
      return true;
    } else {
      return false;
    }
  }

  addToFavoriteMovies(movie: any): void {
    this.fetchMovies.addFavoriteMovie(movie).subscribe((resp: any) => {
      this.snackBar.open('Movie added to favorites', '', {
        duration: 2000,
      });
      this.ngOnInit();
    });
  }

  removeFromFavoriteMovies(movie: any): void {
    this.fetchMovies.removeFavoriteMovie(movie).subscribe((resp: any) => {
      this.snackBar.open('Movie removed from favorites', '', {
        duration: 2000,
      });
      this.ngOnInit();
    });
  }
}
