import axios from 'axios';

const newUser = (user) => {
  return async (dispatch) => {
    const { data } = await axios.post(`/api/v1/users`, {
      user,
    });
    dispatch({
      type: 'NEW_USER',
      data: data.user,
    });
    // return data.products;
  };
};

const getProfile = () => {
  return async (dispatch) => {
    const { data } = await axios.get(`/api/v1/users/${id}`, {
      user,
    });
    dispatch({
      type: 'SINGLE_USER',
      data: data.user,
    });
    // return data.products;
  };
};

const EditProfile = (user) => {
  return async (dispatch) => {
    const { data } = await axios.post(`/api/v1/users/${id}`, {
      user,
    });
    dispatch({
      type: 'EDIT_USER',
      data: data.user,
    });
    // return data.products;
  };
};

export { newUser, getProfile, EditProfile };
