import React from "react";
import Routing from "./utils/Routing";
import Nav from "./components/navbar/Nav";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="flex flex-col bg_Third">
      {/* <Nav className="absolute" /> */}
      <div className='' >
        <Routing />
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default App;
