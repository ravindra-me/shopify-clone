import axios from "axios";

const listAllProducts = (query) => {
  return async (dispatch) => {
    const { data } = await axios.get(`/api/v1/products${query}`);
    dispatch({
      type: "LIST_PRODUCTS",
      data: data.products,
    });
  };
};

const editSingleProduct = (slug) => {
  return async (dispatch) => {
    const { data } = await axios.get(`/api/v1/products/${slug}`);
    dispatch({
      type: "EDIT_PRODUCTS",
      data: data.product,
    });
    return data.product;
  };
};

const updateEditProduct = (slug, updateData) => {
  return async (dispatch) => {
    try {
      console.log(updateData);
      const { data } = await axios.put(`/api/v1/products/${slug}`, {
        product: updateData,
      });

      dispatch({
        type: "PUT_PRODUCTS",
        data: data.product,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export { listAllProducts, editSingleProduct, updateEditProduct };
