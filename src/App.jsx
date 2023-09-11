import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WebFont from "webfontloader";

//page
import Login from "./pages/Login/index";
import UserWallet from "./pages/userWallet/index";
import AddWallet from "./pages/addWallet/index";
import Dasborad from "./pages/Dasborad/index";
import Transcription from "./pages/Transcription/index";
import AddTranscription from "./pages/addTranscription/index";
import Account from "./pages/Account/index";

//protect route
import PrivateRoute from "./components/ProtectRoute/PrivateRoute";

const App = () => {
  WebFont.load({
    google: {
      families: ["Inter:400,500,600&display=swap"],
    },
  });
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userProfile");
  const userIdParse = JSON.parse(userId);

  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute
                element={<UserWallet />}
                token={token}
                user={userIdParse}
              />
            }
          />
          <Route path="/UserWallet" element={<UserWallet />} />

          <Route path="/Login" element={<Login />} />

          <Route
            path="/AddWallet"
            element={
              <PrivateRoute
                element={<AddWallet />}
                token={token}
                user={userIdParse}
              />
            }
          />
          <Route path="/AddWallet" element={<AddWallet />} />


          <Route
            path="/Dasborad"
            element={
              <PrivateRoute
                element={<Dasborad />}
                token={token}
                user={userIdParse}
              />
            }
          />
          <Route path="/Dasborad" element={<Dasborad />} />


          <Route
            path="/Transcription"
            element={
              <PrivateRoute
                element={<Transcription />}
                token={token}
                user={userIdParse}
              />
            }
          />
          <Route path="/Transcription" element={<Transcription />} />


          <Route
            path="/AddTranscription"
            element={
              <PrivateRoute
                element={<AddTranscription />}
                token={token}
                user={userIdParse}
              />
            }
          />
          <Route path="/AddTranscription" element={<AddTranscription />} />

          
          <Route
            path="/Account"
            element={
              <PrivateRoute
                element={<Account />}
                token={token}
                user={userIdParse}
              />
            }
          />
          <Route path="/Account" element={<Account />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default App;
