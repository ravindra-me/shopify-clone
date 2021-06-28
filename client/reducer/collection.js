const initialState = {
  allCollection: null,
  singleCollection: null,
};

function collection(state = initialState, action) {
  switch (action.type) {
    case 'LIST_COLLECTION':
      return { ...state, allCollection: action.data };
    case 'EDIT_COLLECTION':
      return { ...state, singleCollection: action.data };
    case 'NEW_COLLECTION':
      return { ...state, singleCollection: action.data };
    default:
      return state;
  }
}

export default collection;
