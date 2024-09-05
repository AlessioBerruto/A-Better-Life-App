import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App.jsx';
import './index.css';
import Timer from './pages/timer.jsx';
import Video from './pages/video.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter ([
  {
    path: "/", 
    element: <App></App>,
  },
  {
    path: "/timer",
    element: <Timer></Timer>,
  },
  {
    path: "/video",
    element: <Video></Video>,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
