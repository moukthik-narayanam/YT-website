import React, { Suspense } from 'react';
import './App.css';
import MenuBar from "./components/menu-bar/MenuBar";
import { MenuBarItems } from './components/menu-bar/MenuItems';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './components/routes/Routes';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
const basename = process.env.NODE_ENV === 'production' ? `/YT-website` : '/';

  return (
    <BrowserRouter basename={basename}>
      <Suspense fallback={"Loading"}>
        <MenuBar menuBarItems={MenuBarItems} />
        <Suspense fallback={"Loading"}>
          <Routes routes={MenuBarItems} defaultRoute={"/home"} />
        </Suspense>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
