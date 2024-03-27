import { api } from "../../../libs/axios";

export const listAllProductsService = async () => {
  try {
    const response = await api.get("/list-product");

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
