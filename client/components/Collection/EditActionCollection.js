import React from 'react';
import { connect } from 'react-redux';

import { deleteCollection } from '../../action/collectionActions';

function EditActionCollection({
  slectedCollection,
  dispatch,
  setState,
  state,
}) {
  return (
    <div className="flex  my-4 ">
      <p className="btn py-2 px-4 border rounded bg-white">
        {slectedCollection.length} selected
      </p>
      <button
        className="btn py-2 px-4 border bg-white rounded"
        onClick={() => {
          dispatch(deleteCollection(slectedCollection));
          setState({ ...state, slectedCollection: [] });
        }}
      >
        Delete collections
      </button>
    </div>
  );
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(EditActionCollection);
