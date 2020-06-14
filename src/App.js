import React, { Suspense, useMemo, useState} from 'react';
import MenuBar from "./components/menu-bar/MenuBar";
import { MenuBarItems } from './constants/MenuItems';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './components/routes/Routes';
import Footer from "./components/footer/Footer";
import { Toast } from 'react-bootstrap';
import PageLoading from './components/page-loading/PageLoading';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export const AppContext = React.createContext(null);
const defaultToast = { open: false, message: "", class: "" };
function App() {

  const [toast, setToast] = useState(defaultToast);


  function setToastToDefault() {
    setToast(defaultToast);
  }

  const appContextValue = useMemo(() => {
    return {
      setToast
    }
  }, []);
  return (
    <BrowserRouter>
      <AppContext.Provider value={appContextValue}>
        <Suspense fallback={<PageLoading />}>
          <Toast className="app-toast" onClose={setToastToDefault} show={toast.open} delay={3000} autohide>
            <Toast.Body className={toast.class}>{toast.message}</Toast.Body>
          </Toast>
          <MenuBar menuBarItems={MenuBarItems} />
          <Suspense fallback={<PageLoading />}>
            <Routes routes={MenuBarItems} defaultRoute={"/home"} />
          </Suspense>
          <Footer />
        </Suspense>
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;
