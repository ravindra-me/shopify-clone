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

let listCollection = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/api/v1/collection');
      dispatch({
        type: 'LIST_COLLECTION',
        data: data.collections,
      });
      return data.collections;
    } catch (error) {
      return false;
    }
  };
};

let deleteCollection = (slugs) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete('/api/v1/collection/delete', {
        data: {
          slugs: slugs,
        },
      });
      dispatch({
        type: 'LIST_COLLECTION',
        data: data.collections,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export { createCollection, listCollection, deleteCollection };
