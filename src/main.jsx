import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { 
   createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Student from './components/Student.jsx'
import StudentList from './components/StudentList.jsx'
import DefaultLayout from './Layout/Defaultlayout.jsx'




const Router = createBrowserRouter([
    {
       path: '/',
       element: <DefaultLayout />,
       children: [
        {
          path: '/about',
          element: <h1>About Us</h1>
        },
        {
          path: '/',
          element: <h1>Home  </h1>
        },
        {
          path: '/students',
          element: <StudentList />
        }

       ]
      }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={Router} />
  </StrictMode>,
)
