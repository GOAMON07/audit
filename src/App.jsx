import React, { useState } from "react";
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";


//page
import Login from "./pages/Login/index";
import UserWallet from "./pages/userWallet/index";
import AddWallet from "./pages/addWallet/index"
import Dasborad from "./pages/Dasborad/index"
import Transcription from "./pages/Transcription/index"
import AddTranscription from "./pages/addTranscription/index"
import Account from "./pages/Account/index"

const App = () => {


  return (
    <BrowserRouter>
      <Routes>
        <Route end path="/" element={<Login />} />
        <Route path="/UserWallet" element={<UserWallet />} />
        <Route path="/AddWallet" element={<AddWallet />} />
        <Route path="/Dasborad" element={<Dasborad />} />
        <Route path="/Transcription" element={<Transcription />} />
        <Route path="/AddTranscription" element={<AddTranscription />} />
        <Route path="/Account" element={<Account />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
