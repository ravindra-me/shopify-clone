import axios from 'axios';

const newUser = (user) => {
  return async (dispatch) => {
    const { data } = await axios.post(`/api/v1/user`, {
      user,
    });
    localStorage.setItem("token", data.user.token);
    console.log(data.user)
    dispatch({
      type: 'USER_INFO',
      data: data.user,
    });
    // return data.products;
  };
};

const loginUser = (user) => {
	return async (dispatch) => {
		const { data } = await axios.post(
			`/api/v1/user/login`,
			{
				user,
			},
    );

    localStorage.setItem("token", data.user.token);

		dispatch({
			type: "USER_INFO",
			data: data.user,
		});
		// return data.products;
	};
};

const getProfile = (token) => {
  return async (dispatch) => {
    console.log("working")
    try {

      const { data } = await axios.get(
      `/api/v1/user`,
      {
        headers: {
          Authorization: token || localStorage.getItem("token") || null,
        },
      }
      );
      console.log(data)
      dispatch({
			type: "USER_INFO",
			data: data.user,
		});
    } catch (error) {
      console.log(error)
    }
    // return data.products;
  };
};

const EditProfile = (user) => {
  return async (dispatch) => {
    const { data } = await axios.post(`/api/v1/user`, {
      user,
    },
    {
				headers: {
					Authorization: localStorage.getItem("token") || null,
				},
			});
    dispatch({
		type: "USER_INFO",
		data: data.user,
	});
    // return data.products;
  };
};

export { newUser, getProfile, EditProfile, loginUser };
