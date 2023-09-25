import React from "react";
import { BrowserRouter} from "react-router-dom";
import WebFont from "webfontloader";

import  RoutesPage  from "../src/routing/Routes"

const App = () => {
  WebFont.load({
    google: {
      families: ["Inter:400,500,600&display=swap"],
    },
  });


  return (
    <React.StrictMode>
      <BrowserRouter>
       <RoutesPage/> 
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default App;