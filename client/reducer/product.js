const initialState = {
  allProducts: null,
  singleProduct: null,
};

function products(state = initialState, action) {
  switch (action.type) {
    case 'LIST_PRODUCTS':
      return { ...state, allProducts: action.data };
    case 'EDIT_PRODUCTS':
      return { ...state, singleProduct: action.data };
    case 'PUT_PRODUCTS':
      console.log(action.data);
      return { ...state, singleProduct: action.data };
    default:
      return state;
  }
}

export default products;
