import axios from 'axios';

let createCollection = (collectionData) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
			"/api/v1/collection/new",
			{
				collection: collectionData,
			},
			{
				headers: {
					Authorization:  localStorage.getItem("token") || null,
				},
			}
		);
      dispatch({
        type: 'NEW_COLLECTION',
        singleCollection: data.collection,
      });

      return true;
    } catch (error) {
      console.log(error);
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
      console.log(slugs, "abc")
      const { data } = await axios.delete(
			"/api/v1/collection/delete",
			{
				headers: {
					Authorization: localStorage.getItem("token") || null,
				},
				data: {
					slugs: slugs,
				},
			}
		);

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
