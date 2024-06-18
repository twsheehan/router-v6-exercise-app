import React from 'react'
import {Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import User from './User';
import NoMatch from './NoMatch';

function RootRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:userId" element={<User />} />
        <Route path="*" element={<NoMatch />} />
    </Routes>
  )
}

export default RootRoutes;
