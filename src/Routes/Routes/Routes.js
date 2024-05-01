import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Home/Shared/Login";
import Register from "../../Pages/Home/Shared/Register";
import UserAbout from "../../Contexts/UserAbout";
import About from "../../layout/About";
import Allcourses from "../../layout/Allcourses";

import CategoryD from "../../layout/CategoryD";
import Blog from "../../layout/Blog";
import Faq from "../../layout/Faq";
import Contact from "../../layout/Contact";
import Subject from "../../layout/Subject/Subject";

export const routers = createBrowserRouter([

  {
    path: '/',
    element: <Main></Main>,
    children: [

      {
        path: '/',
        element: <Home></Home>,
      },

      {
        path: 'login',
        element: <Login></Login>,
      },

      {
        path: 'register',
        element: <Register></Register>,
      },
      {
        path: 'userAbout',
        element: <UserAbout></UserAbout>,
      },

      {
        path: 'courses',
        element: <Allcourses></Allcourses>,
      },


      {
        path: '/catagory/:id',
        // element: <Category></Category>,
        element: <CategoryD />,
        // loader: ({ params }) => fetch(`http://localhost:5000/classes/${params.id}`)
      },


      {
        path: '/subject/:id',
        element: <Subject></Subject>,
        loader:({params}) => fetch (`http://localhost:5000/classes/${params.id}`)
       },





      {
        path: 'about',
        element: <About></About>,
      },

      {
        path: 'blog',
        element: <Blog></Blog>,
      },

      {
        path: 'faq',
        element: <Faq></Faq>,
      },
      {
        path: 'contact',
        element: <Contact></Contact>,
      },


    ]
  }
])