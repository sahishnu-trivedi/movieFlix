import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Favourites from './pages/Favourites/Favourites';
import Trending from './pages/Trending/Trending'
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MovieDetail from './pages/MovieDetail/MovieDetail';
import Home from './pages/Home/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: '/moviedetail/:id',
        element: <MovieDetail />
      },
      {
        path: '/favourites',
        element: <Favourites />
      },
      {
        path: '/trending',
        element: <Trending />
      },
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
