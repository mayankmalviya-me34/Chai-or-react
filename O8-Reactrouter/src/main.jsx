import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import About from './component/About.jsx'
import Home from './component/home/Home.jsx'
import Contact from './component/contact/Contact.jsx'
import User from './component/user/User.jsx'
import Github, { githubInfoLoader } from './component/github/Github.jsx'

//const router = createBrowserRouter([
//{
//path: '/',
//element: <App/>,
//children: [
//  {
//    path: "",
//    element: <Home/>
//  },
//{
//  path:"about",
//  element: <About/>
//},
//{
//  path:"contact",
//  element: <Contact/>
//}
//
//
//

//or



const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="user/:userid" element={<User />} />
        <Route 
        loader={githubInfoLoader}
        path="github" 
        element={<Github />} />
      </Route>
    )
  );


  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>,
  )
