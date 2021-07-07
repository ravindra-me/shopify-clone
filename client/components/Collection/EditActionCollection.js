import React from 'react';
import { connect } from 'react-redux';

import { deleteCollection } from "../../action/collectionActions";

function EditActionCollection(props) {
	const { slectedCollection, dispatch, setState, prevState } = props;
	console.log(slectedCollection);
	return (
		<div className="flex  my-4 ">
			<p className="btn py-2 px-4 border rounded bg-white">{slectedCollection.length} selected</p>
			<button
				className="btn py-2 px-4 border bg-white rounded"
				onClick={() => {
					props.dispatch(deleteCollection(slectedCollection));
					setState({ ...prevState, slectedCollection: [] });
				}}
			>
				Delete collections
			</button>
		</div>
	);
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(EditActionCollection);
