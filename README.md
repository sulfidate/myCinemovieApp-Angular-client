# MyCinemovieAppAngularClient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.7.

## Objective
Using Angular, build the client-side for an application called myFlix based on its existing server-side code (REST API and database), with supporting documentation.



## Context
- As the modern workplace continues to transform, remote work has become more important than ever. Whether you end up working in an office or from home, it's crucial that you know how to communicate and collaborate effectively.
- In this Achievement, you'll learn how to work with others by writing and sharing documentation with your peers, providing feedback, and making a contribution to the tech community. The ability to create detailed and straightforward handoffs for other developers is an indispensable skill that you'll need when applying for a job.
- Opportunities to engage with these skills will be provided by your Achievement 6 project. For your project, you'll return to the myFlix app's server-side from Achievement 2 and build the client-side interface for a new single-page, responsive app, one that includes several interface views that will handle data through the previously-defined REST API endpoints.
- This time you'll use Angular, instead of React. Angular is an extremely popular framework that can be used for a wide range of mobile and desktop applications. It's particularly well-suited to large projects, as well as projects requiring a complex user interface because it comes with a variety of built-in modules and services.
- As you work on this project, you’ll use Agile project management techniques including user stories, story points, and a kanban board. These techniques are commonly used by companies in the tech industry. At the same time, you'll practice communicating the skills and knowledge that you're acquiring with technical interview questions, before adding the project to, and finalizing, your online portfolio.

### Technical Requirements
- The application must be written in Angular (version 9 or later)
- The application requires the latest version of Node.js and npm package
- The application must contain user registration and login forms
- The application must be designed using Angular Material
- The application's codebase must contain comments using Typedoc
- The project must contain technical documentation using JSDoc
- The project must be hosted on GitHub Pages


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Description

The aim of this project is to build the client-side for an application called myCinemovieApp using Angular based on its existing server-side code (REST API and database), with supporting documentation.

### User Stories

- As a user, I want to be able to receive information on movies, directors, and genres so that I can learn more about movies I’ve watched or am interested in.
- As a user, I want to be able to create a profile so I can save data about my favorite movies.

### Key Features

- Welcome view where users are able to either log in or register an account
- Upon authentication, display a view of all Movies
- Upon clicking on a particular movie information - genre/director/storyline - users will be taken to a dialog/modal, where additional movie details will be displayed.

### What technology did I use and why?

I chose to create the application using **Angular** due to the following considerations:

I use **Angular Material** to style the UI of my application to make it responsive and take advantage of the ready to use components, such as mat cards.

### What challenges did I face, what did I learn?

- Transferring data from one component to the other (e.g., from movie-card-component to genre-component). Found the solution by 'Injecting' the variables using @Inject(MAT_DIALOG_DATA).

- The application requires a service to get the favorite movies of a user. As this API endpoint was not defined yet, I had to go back to the backend code and add this GET endpoint.

## Development Process for the movies application

### Install Angular

1. Check if Angular is already installed on device

```bash
ng --version
```

2. If not, install Angular

```bash
npm install -g @angular/cli
```

### Create a new Angular project

1. Navigate to folder and create project

```bash
ng new my-project-name
```

2. Navigate to project folder to run project

```bash
ng serve --open
```

### Set up app to load data from movie API

1. Set up Angular HttpClient
   1.1. Go to app.module.ts and add

```bash
import { HttpClientModule } from '@angular/common/http';
```

1.2. Add HttpClientModule to the imports of @NgModule

2. Create Angular Service for Consuming REST API
   2.1 Create a new Service inside app folder

```bash
ng generate service fetch-api-data
```

2.2. Add import statements to fetch-api-data.service.ts file

```bash
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
```

3. Implement services logic to make API calls

- User registration
- User login
- Get all movies
- Get one movie
- Get director
- Get genre
- Get user
- Get favourite movies for a user
- Add a movie to favourite Movies
- Edit user
- Delete user and
- Delete a movie from the favorite movies

### Add Angular Material to application

1. Install project dependency

```bash
$ ng add @angular/material
```

2. Import models from Angular Material to app.module.ts

3. Add modules to imports array to serve to other components

### Create components for user to use application

Using the command:

```bash
$ ng generate component my-component-name
```

Structure of components:

- Welcome screen
  - User registration form (signup)
  - User login form
- Header
- Movie Card View
- Dialogs for Movie Card:
  - Director
  - Genre
  - Storyline
- Profile View
  - Edit profile dialog
  - Delete User
  - User Logout

### Add routing to application

1. Import Angular's built-in router:

```bash
import { RouterModule, Routes } from '@angular/router';
```

2. Add to app.component.html

```bash
<router-outlet></router-outlet>
```

3. Create routes in app.module.ts

### Deploy application on github pages

1. If not done yet: Create github repository for application

2. If also not done yet: Link the new remote repository to the local project folder. To do so, simply run this command from inside your project folder (replace <GitHub-username> and <repository-name> with your own GitHub username and repository name): git remote add origin https://github.com/<GitHub-username>/<repository-name>.git

3. Add angular-cli-ghpages by running

```bash
ng add angular-cli-ghpages.
```

4. Build your application (i.e., generate static HTML, CSS, and JavaScript files out of your application so that browsers can interpret them without the need to use any extra tools/plugins). To do so, run the following command, replacing <repository-name> with your own repository name:

```bash
 ng deploy --base-href=/<repository-name>/.
```

### Add TypeDoc Documentation

1. Install typedoc (if not yet installed):

```bash
npm install typedoc
```

2. Check that code is commented adhering to best practices

3. Run typedoc to create documentation:

```bash
typedoc --entryPointStrategy expand ./src
```
