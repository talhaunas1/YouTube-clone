import React from 'react'
import { BrowserRouter, Routes as Router, Route } from "react-router-dom";
// import Home from '../pages/Home';
import Video from '../pages/Video';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';



const Routes = () => {
  return (
    // <BrowserRouter>
    <Router>
        <Route path="/">
            <Route index element={<Home/>}/>
            <Route index element={<Home type="random"/>}/>
            <Route path='trends' element={<Home type="trend"/>}/>
            <Route path="subscriptions" element={<Home type="sub"/>}/>
            <Route path='signin' element={<SignIn/>}/>
            <Route path="video">
                <Route path=":id" element={<Video/>}/>
            </Route>
        </Route>
    </Router>
    // </BrowserRouter>
  )
}

export default Routes