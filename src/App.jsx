import React from "react";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer"
import Scrolltop from "./components/Scrolltop/scrolltop";
import MainRoutes from "./routes/RoutesDom";
import { DataProvider } from "./context/DataContext";
import { BrowserRouter } from "react-router-dom";

function App() {
  

  return (
    <BrowserRouter>
    <DataProvider>
      <div className="App">
        <Header />
        <main>

          <MainRoutes />
        </main>
        <Footer />
        <Scrolltop />
      </div>
    </DataProvider>

  </BrowserRouter>
  )
}

export default App
