import customAxios from "../../setup/customAxios";

const GETAMOUNTAPI = `/api/dashbord/wallet/`;
const GETTRANSACTION  =`/api/dashbord/spending`
const walletId = JSON.parse(localStorage?.getItem("userProfile") ?? {}
)?.idWallet;

export async function getAmountAPI() {
  try {
    const res = await customAxios.get(`${GETAMOUNTAPI}?walletId=${walletId}`);
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


export async function getTransactionAPI(
  dayType = "week"
) {
  try {
    const res = await customAxios.get(`${GETTRANSACTION}?walletId=${walletId}&dayType=${dayType}`);
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