import React, { Suspense } from 'react';
import MenuBar from "./components/menu-bar/MenuBar";
import { MenuBarItems } from './constants/MenuItems';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './components/routes/Routes';
import Footer from "./components/footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PageLoading from './components/page-loading/PageLoading';

function App() {

  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoading />}>
        <MenuBar menuBarItems={MenuBarItems} />
        <Suspense fallback={<PageLoading />}>
          <Routes routes={MenuBarItems} defaultRoute={"/home"} />
        </Suspense>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
