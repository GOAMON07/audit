import customAxios from "../../setup/customAxios";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const GETAMOUNTAPI = `/api/dashbord/wallet/`;
const GETTRANSACTION = `/api/dashbord/spending`;

export async function getAmountAPI() {
  const dataFromLocalStroage = localStorage.getItem("userProfile");
  const walletId = JSON.parse(dataFromLocalStroage)?.idWallet ?? "0";
  const token = localStorage.getItem("token");
  try {
    const res = await customAxios.get(`${GETAMOUNTAPI}?walletId=${walletId}`,{
      headers:{
        Authorization:`Bearer ${token}`
      }
    });
    if (!res.data) {
      throw new Error("func=getAmountAPI,error=Data Error");
    }
    

    return res.data;
  } catch (error) {
    if (customAxios.isCancel(error)) {
      console.log("Request canceled : ", error?.message);
      return null;
    } else {
      throw new Error("func=getAmountAPI,error=", error);
    }
  }
}

export async function postAmountAPI(user) {
  const dataFromLocalStroage = localStorage.getItem("userProfile");
  const walletId = JSON.parse(dataFromLocalStroage)?.idWallet ?? "0";
  const token = localStorage.getItem("token");
  try {
    const res = await customAxios.post(`${GETAMOUNTAPI}?walletId=${walletId}`, {
      userId: user,
    },{
      headers:{
        Authorization:`Bearer ${token}`
      }
    }) ;
    if (!res.data) {
      throw new Error("func=postAmountAPI,error=Data Error");
    }

    return res.data;
  } catch (error) {
    if (customAxios.isCancel(error)) {
      console.log("Request canceled : ", error?.message);
      return null;
    } else {
      throw new Error("func=postAmountAPI,error=", error);
    }
  }
}

export async function getTransactionAPI(dayType) {
  const dataFromLocalStroage = localStorage.getItem("userProfile");
  const walletId = JSON.parse(dataFromLocalStroage)?.idWallet ?? "0";
  const token = localStorage.getItem("token");
  try {
    const res = await customAxios.get(
      `${GETTRANSACTION}?walletId=${walletId}&dayType=${dayType}`
    ,{
      headers:{
        Authorization:`Bearer ${token}`
      }
    });
    if (!res.data) {
      throw new Error("func=getTransactionAPI,error=Data Error");
    }

    return res.data;
  } catch (error) {
    if (customAxios.isCancel(error)) {
      console.log("Request canceled : ", error?.message);
      return null;
    } else {
      throw new Error("func=getTransactionAPI,error=", error);
    }
  }
}
