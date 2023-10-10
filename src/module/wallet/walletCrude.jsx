import customAxios from "../../setup/customAxios";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

const GETDATAWALLET = `/api/wallet`;

export async function getDataWalletAPI() {
  const dataFromLocalStroage = localStorage.getItem("userProfile");
  const userId = JSON.parse(dataFromLocalStroage)?.userId ?? "0";
  const walletId = JSON.parse(dataFromLocalStroage)?.idWallet ?? "0";
  const token = localStorage.getItem("token");
  try {
    const res = await customAxios.get(`${GETDATAWALLET}?userId=${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!res.data) {
      throw new Error("func=getDataWalletAPI,error=Data Error");
    }
    // if (!userId) {
    //   <Navigate to="/UserWallet" replace />;
    // } else {
    //   <Navigate to="/Login" replace />;
    // }
    const findRes = res.data.find((item)=>{
      return item.walletId === walletId
    }) 
    return findRes ;
  } catch (error) {
    if (customAxios.isCancel(error)) {
      console.log("Request canceled : ", error?.message);
      return null;
    } else {
      throw new Error("func=getDataWalletAPI,error=", error);
    }
  }
}
