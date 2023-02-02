import React, { useState } from "react";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Router } from "./components/Router";

const App = () => {
  const [darktheme, setDarkTheme]= useState(false);
  return (
    <div className="{ darkTheme ? 'dark': ''}"> 
      <h1 className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
        <Navbar darktheme={darktheme} setDarkTheme={setDarkTheme}/>
        <Router />
        <Footer />

        </h1>
    </div>
  );
};

export default App;
