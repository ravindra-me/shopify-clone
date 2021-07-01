const initialState = {
  user: null,
};

function products(state = initialState, action) {
  switch (action.type) {
    case 'NEW_USER':
      return { ...state, user: action.data };
    case 'EDIT_USER':
      return { ...state, user: action.data };
    case 'PUT_PRODUCTS':
      console.log(action.data);
      return { ...state, singleProduct: action.data };
    default:
      return state;
  }
}

export default products;
