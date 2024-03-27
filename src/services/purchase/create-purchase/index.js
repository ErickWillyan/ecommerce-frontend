import { api } from "../../../libs/axios";

export const createPurchase = async () => {
  try {
    const response = await api.post("create-purchase");

    return response;
  } catch (error) {
    throw (
      ({
        error: true,
        message: "Erro no servidor",
      },
      console.log(error))
    );
  }
};
