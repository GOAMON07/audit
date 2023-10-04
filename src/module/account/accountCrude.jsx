import customAxios from "../../setup/customAxios";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

const GETDATAACCOUNT = `/api/auth/account`;
const dataFromLocalStroage = localStorage.getItem("userProfile");
const walletId = JSON.parse(dataFromLocalStroage)?.idWallet ?? "0";
const userId = JSON.parse(dataFromLocalStroage)?.userId ?? "0";

export async function getDataAccountAPI() {
  try {
    const res = await customAxios.get(`${GETDATAACCOUNT}?userId=${userId}`);
    if (!res.data) {
      throw new Error("func=getDataAccountAPI,error=Data Error");
    }
    if (!walletId) {
      <Navigate to="/UserWallet" replace />;
    } else {
      <Navigate to="/Login" replace />;
    }

    return res.data;
  } catch (error) {
    if (customAxios.isCancel(error)) {
      console.log("Request canceled : ", error?.message);
      return null;
    } else {
      throw new Error("func=getDataAccountAPI,error=", error);
    }
  }
}
