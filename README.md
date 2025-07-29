# Movie

This is a learning project built for practice and portfolio purposes. A single-page React application for browsing and managing a collection of movies with basic user interaction such as search and favorites.

**Live demo:** [View Live on Vercel](https://movie-mu-roan.vercel.app/)

## Features
- Movie browsing with search functionality and personal favourites list;
- Built with React + Vite** + SWC and SCSS modular styling;
- Used React Router for client-side routing;
- State management through React Context API;
- LocalStorage used for:
    - Saving movie list between sessions;
    - Tracking user's favorite movies;
    - Persisting basic "authorization" simulation;
- Fully responsive layout.

## Getting Started

### 1) Clone the repository
```bash
git clone https://github.com/yu-nykanorova/movie.git
cd movie
```

### 2) Install dependencies
```bash
npm install
```

### 3)
```bash
npm run dev
```  
Open http://localhost:5173 to view it in the browser.

## Technologies Used
- React + Vite
- SCSS
- React Router DOM
- React Context API
- LocalStorage

## Notes
No backend or API is used — movies are loaded from a static file (films.js) and stored in localStorage.

Favorite toggling and simulated "auth" behavior are handled entirely in the frontend.

All state logic is wrapped in a custom FilmsContext provider, which makes movie data and actions globally accessible.

## Design Source
This layout was based on a free Figma template used in a web development course.  
[View Figma Design](https://www.figma.com/design/YTrSMnzfMOE2IKHhzHSWd6/Movie-Streaming-Web-App-UI--Community---Copy-?node-id=204-332&p=f&t=DvQFhaKGIHjFQBl2-0)

## License
This project is open source and free to use for learning or portfolio presentation.

*Created by Yuliia Nykanorova*
