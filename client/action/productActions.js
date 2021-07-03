import axios from 'axios';

const listAllProducts = (query) => {
  console.log(query, 'slug');
  return async (dispatch) => {
    const { data } = query
      ? await axios.get(`/api/v1/products${query}`)
      : await axios.get(`/api/v1/products`);
    dispatch({
      type: 'LIST_PRODUCTS',
      data: data.products,
    });
    return data.products;
  };
};

const editSingleProduct = (slug) => {
  return async (dispatch) => {
    const { data } = await axios.get(`/api/v1/products/${slug}`);
    dispatch({
      type: 'EDIT_PRODUCTS',
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
        type: 'PUT_PRODUCTS',
        data: data.product,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

const updateAction = (action, slugs) => {
  return async (dispatch) => {
    try {
      console.log({ slugs, action });
      const { data } = await axios.put('/api/v1/products', {
        product: {
          slugs: slugs,
          action: action,
        },
      });
      console.log(data);
      dispatch({
        type: 'LIST_PRODUCTS',
        data: data.products,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

const uploadImage = async (name) => {
  const formData = new FormData();
  formData.append('file', name);
  formData.append('upload_preset', 'ml_default');
  const { data } = await axios.post(
    `https://api.Cloudinary.com/v1_1/du8xitmfi/image/upload`,
    formData
  );
  return data.secure_url;
};

const addProduct = (postData) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post('/api/v1/products/new', {
        product: postData,
      });
      console.log(data, 'mata mar dia');
    } catch (error) {}
  };
};

export {
  listAllProducts,
  editSingleProduct,
  updateEditProduct,
  updateAction,
  addProduct,
  uploadImage,
};
