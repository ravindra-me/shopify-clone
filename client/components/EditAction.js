import React, { useState } from 'react';
import { updateAction } from '../action/productActions';
import { connect } from 'react-redux';
function EditAddAction(props) {
  let [action, setAction] = useState({ isAction: false });

  const { filterState } = props;
  const handleAction = (actionType) => {
    const data = props.dispatch(
      updateAction(actionType, filterState.selectedProduct)
    );
    console.log(data);
  };

  return (
    <>
      <div>
        <ul className="flex">
          <li className="border p-2">
            {filterState.selectedProduct.length} selected
          </li>
          <li
            className="border p-2 relative ml-4"
            onClick={() => setAction({ isAction: !action.isAction })}
          >
            More Action
            {action.isAction && (
              <ul className="absolute  top-12 bg-gray-100 rounded action-sub-nav ">
                <li className="p-2" onClick={() => handleAction('active')}>
                  Set as Active
                </li>
                <li className="p-2" onClick={() => handleAction('draft')}>
                  Set as draft
                </li>
                <li className="p-2" onClick={() => {}}>
                  Delete Products
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </>
  );
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(EditAddAction);
