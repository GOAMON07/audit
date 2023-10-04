import { Routes, Navigate, Route, Outlet } from "react-router-dom";
// import {PublicRoutes} from '../routing/PublicRoutes'

import UserWallet from "../pages/userWallet";
import AddWallet from "../pages/addWallet";
import Dasborad from "../pages/Dasborad";
import Transcription from "../pages/Transcription";
import AddTranscription from "../pages/addTranscription";
import Account from "../pages/Account";
import Login from "../pages/Login";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const userProfile = localStorage.getItem("userProfile");
  const walletId = JSON.parse(userProfile)?.idWallet;

  if (!token || !userProfile) {
    return <Navigate to="/Login" />;
  } else if (!walletId) {
    return <Navigate to="/UserWallet" />;
  } else {
    return children;
  }
};

const PrivateWalletIdRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const userProfile = localStorage.getItem("userProfile");

  if (!token || !userProfile) {
    return <Navigate to="/Login" />;
  } else {
    return children;
  }
};

const RoutesPage = () => {
  const token = localStorage.getItem("token");
  const userProfile = localStorage.getItem("userProfile");

  return (
    <Routes>
      {!token || !userProfile ? (
        <>
          <Route path="/Login" element={<Login />} />
          <Route index element={<Navigate to="/Login" />} />
        </>
      ) : (
        <Route path="/Login" element={<Navigate to="/" replace />} />
      )}

      <Route path="/" element={<Outlet />}>
        <Route
          index
          element={
            <PrivateRoute>
              <Dasborad />
            </PrivateRoute>
          }
        />
        <Route
          path="/Dasborad"
          element={
            <PrivateRoute>
              <Dasborad />
            </PrivateRoute>
          }
        />

        <Route
          path="/UserWallet"
          element={
            <PrivateWalletIdRoute>
              {" "}
              <UserWallet />{" "}
            </PrivateWalletIdRoute>
          }
        />

        <Route
          path="/AddWallet"
          element={
            <PrivateRoute>
              <AddWallet />
            </PrivateRoute>
          }
        />
        <Route
          path="/Transcription"
          element={
            <PrivateRoute>
              <Transcription />
            </PrivateRoute>
          }
        />
        <Route
          path="/AddTranscription"
          element={
            <PrivateRoute>
              <AddTranscription />
            </PrivateRoute>
          }
        />
        <Route
          path="/Account"
          element={
            <PrivateRoute>
              <Account />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
};

export default RoutesPage;
