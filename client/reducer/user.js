const initialState = {
  user: null,
};

function customer(state = initialState, action) {
  switch (action.type) {
    case 'USER_INFO':
      return { ...state, user: action.data };
    case 'PUT_PRODUCTS':
      console.log(action.data);
      return { ...state, singleProduct: action.data };
    default:
      return state;
  }
}

export default customer;
