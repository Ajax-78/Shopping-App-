import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromChildren, RouterProvider } from 'react-router-dom';
import { Route } from 'react-router-dom';
import About from './Component/About'
import  Contact from './Component/Contact';
import Login from './Component/Login'
import { CategoryProvider } from './CategoryContext';


const router=createBrowserRouter(
  createRoutesFromChildren(
    <Route path='/' element={<App/>}>
     <Route  path='/About' element={<About/>}></Route> 
     <Route  path='/Contact' element={<Contact/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
    </Route>

  )
)






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CategoryProvider>
    <RouterProvider  router={router}/>
    </CategoryProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
