import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Student from './components/Student.jsx';
import Layout from './components/Layout.jsx';
import AddStudent from './components/AddStudent.jsx';
import StudentDetail from './components/StudentDetail.jsx';



const router = createBrowserRouter([
  { 
    path: "/", 
    element:<Layout/>,
    children: [
      {
        path:'/',
        element:<h1>home</h1>
      },
      {
        path:'/students',
        element:<Student/>
      },
      {
        path:'/student/:id',
        element:<StudentDetail/>
      },
      {
        path:'/student/add',
        element: <AddStudent/>
      },
      {
        path: "/about",
        element: <div>About</div>,
      },
      {
        path: "/contact",
        element: <div>Contact</div>,
      }

    ]
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
