import "./App.css";
import React from "react";
import Header from "./layout/Header";
import PageContent from "./layout/PageContent";
import Footer from "./layout/Footer";

function App() {
  return (
    <div className="font-lato">
      <Header />
      <PageContent />
      <Footer />
    </div>
  );
}

export default App;
