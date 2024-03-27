import { api } from "../../../libs/axios";

export const listThisProductsService = async (props) => {
  try {
    const response = await api.get(`/list-this-product/${props.id}`);

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
