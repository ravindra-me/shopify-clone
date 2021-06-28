import axios from 'axios';

let createCollection = (collectionData) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post('/api/v1/collection/new', {
        collection: collectionData,
      });
      dispatch({
        type: 'NEW_COLLECTION',
        singleCollection: data.collection,
      });

      return true;
    } catch (error) {
      return false;
    }
  };
};

export { createCollection };
