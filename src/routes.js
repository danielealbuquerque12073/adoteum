import React from 'react'
import {
    Routes,
    Route,


  } from "react-router-dom";
import Home from "./pages/Home"
import Form from './pages/Form';
import FormTwo from './pages/FormTwo'
import Gallery from './pages/Gallery';
import Certificates from './pages/Certificates';


export default function AppRoutes() {
    return (
     
<Routes>
     <Route index element={<Home/>}/>
     <Route path="/form/1"element={<Form/>}/>
     <Route path="/form/2"element={<FormTwo/>}/>
     <Route path="/gallery"element={<Gallery/>}/>
     <Route path= "/certificates/:id"element={<Certificates/>}/>
         
   
        </Routes>
    
       
    )
}
