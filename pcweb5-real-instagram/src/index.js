import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PostPageAdd from './views/PostPageAdd';
import PostPageDetails from './views/PostPageDetails';
import PostPageEdit from './views/PostPageEdit'

const router = createBrowserRouter([
  {path: "/", element: <App />},
  {path: "/add", element: <PostPageAdd />},
  {path: "/post/:id", element: <PostPageDetails />},
  {path: "/post/:id/edit", element: <PostPageEdit />}
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
