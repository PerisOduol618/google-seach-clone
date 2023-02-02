import { Result } from "postcss";
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./Navbar";
// import { Results } from "./Results";

export const Router = () => {
  return (
    <div className="p-4">
      <Routes>
        <Route path='/' element={<Navigate from='/' to='/search'/>}/>
        <Route path='/search' element={<Results/>} />
        <Route />
        <Route />
        <Route />


      </Routes>
    </div>
  );
};
