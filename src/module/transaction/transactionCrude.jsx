import customAxios from "../../setup/customAxios";

const GETDATATRANSACTION = `/api/transaction`;
const walletId = JSON.parse(
  localStorage?.getItem("userProfile") ?? {}
)?.idWallet;

export async function getDataTransactionAPI(dateTimes) {
  try {
    const res = await customAxios.get(
      `${GETDATATRANSACTION}?startDate=${dateTimes.startDate}&endDate=${dateTimes.endDate}&walletId=${walletId}`
    );
    if (!res.data) {
      throw new Error("func=getDataTransactionAPI,error=Data Error");
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
