import customAxios from "../../setup/customAxios";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

const GETDATATRANSACTION = `/api/transaction`;
const dataFromLocalStroage = localStorage.getItem("userProfile");
const walletId = JSON.parse(dataFromLocalStroage)?.idWallet ?? "0";

export async function getDataTransactionAPI(dateTimes) {
  try {
    const res = await customAxios.get(
      `${GETDATATRANSACTION}?startDate=${dateTimes.startDate}&endDate=${dateTimes.endDate}&walletId=${walletId}`
    );
    if (!res.data) {
      throw new Error("func=getDataTransactionAPI,error=Data Error");
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
      throw new Error("func=getDataTransactionAPI,error=", error);
    }
  }
}
