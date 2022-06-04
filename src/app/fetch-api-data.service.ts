import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

// Declare the api url that will provide data for the client app
const apiUrl = 'https://mycinemoviedatabase.herokuapp.com/';
@Injectable({
  providedIn: 'root',
})
export class FetchApiDataService {
  // Inject the HttpClient module to the constructor params
  // This will provide HttpClient to the entire class,making it available via this.http
  constructor(private http: HttpClient) {}

  // Making the api call for the user registration endpoint
  public userRegistration(userDetails: any): Observable<any> {
    console.log('userDetails', userDetails);
    return this.http
      .post(apiUrl + 'users', userDetails)
      .pipe(catchError(this.handleError));
  }

  // Making the api call for the user login endpoint
  public userLogin(userDetails: any): Observable<any> {
    console.log('userDetails', userDetails);
    return this.http
      .post(apiUrl + 'login', userDetails)
      .pipe(catchError(this.handleError));
  }

  // Making the api call for the get all movies endpoint
  getAllMovies(): Observable<any> {
    // Get Authorization token stored in local storage
    const token = localStorage.getItem('token');
    return this.http
      .get(apiUrl + 'movies', {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  // Making the api call for the get one movie endpoint
  getOneMovie(title: any): Observable<any> {
    return this.http
      .get(apiUrl + 'movies/title/' + title)
      .pipe(catchError(this.handleError));
  }

  // Making the api call for the get director endpoint
  getDirector(director: any): Observable<any> {
    return this.http
      .get(apiUrl + 'movies/director/' + director)
      .pipe(catchError(this.handleError));
  }

  // Making the api call for the get genre endpoint
  getGenre(genre: any): Observable<any> {
    return this.http
      .get(apiUrl + 'movies/genre/' + genre)
      .pipe(catchError(this.handleError));
  }

  // Making the api call for the get user endpoint
  getUser(username: any): Observable<any> {
    return this.http
      .get(apiUrl + 'users/' + username)
      .pipe(catchError(this.handleError));
  }

  // Making the api call for the get favorite movies for a user endpoint
  getFavoriteMovies(): Observable<any> {
    return this.http
      .get(apiUrl + 'users/username/movies')
      .pipe(catchError(this.handleError));
  }

  // Making the api call for the add a movie to favorite movies endpoint
  addFavoriteMovie(movie: any): Observable<any> {
    return this.http
      .post(apiUrl + 'users/username/movies/' + movie, movie)
      .pipe(catchError(this.handleError));
  }

  // Making the api call for the edit user endpoint
  editUser(username: any): Observable<any> {
    return this.http
      .put(apiUrl + 'users/' + username, username)
      .pipe(catchError(this.handleError));
  }

  // Making the api call for the delete user endpoint
  deleteUser(username: any): Observable<any> {
    return this.http
      .delete(apiUrl + 'users/' + username)
      .pipe(catchError(this.handleError));
  }

  // Making the api call for the delete a movie from favorite movies endpoint
  deleteFavoriteMovie(movie: any): Observable<any> {
    return this.http
      .delete(apiUrl + 'users/username/movies' + movie)
      .pipe(catchError(this.handleError));
  }

  /**
   * extracts response data from HTTP response
   * @param res
   * @returns response body or empty object
   */

  private extractResponseData(res: any): any {
    const body = res;
    return body || {};
  }

  // Handling the error
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Error Status code ${error.status}, ` + `Error body is: ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later.');
  }
}
