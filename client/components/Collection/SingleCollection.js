import React from 'react';
import { Link } from 'react-router-dom';
function SingleCollection(props) {
  const { collection, setState, state } = props;

  var checked = 0;
  return (
    <div className="bg-white px-8 flex py-4  border-b-2  text-left hover:bg-gray-100 px-4">
      <Link
        to={`/admin/products/collections/${collection.slug}`}
        className="flex justify-between   items-center w-full"
      >
        <div className="flex-15">
          <input
            type="checkbox"
            className="checked:bg-blue-600   checked:border-transparent text-xl "
            onClick={(event) => {
              event.stopPropagation();
              if (event.target.checked) {
                console.log(event.target.checked);
                const addSelectCollection = state.slectedCollection.concat(
                  collection.slug
                );
                setState({
                  ...state,
                  slectedCollection: addSelectCollection,
                  selectedAll: false,
                });
              } else {
                const removeSelectProduct = state.slectedCollection.filter(
                  (slug) => slug !== collection.slug
                );
                setFilter({
                  ...state,
                  slectedCollection: removeSelectProduct,
                  selectedAll: false,
                });
              }
            }}
            checked={state.slectedCollection?.includes(collection.slug)}
          />
        </div>
        <div className="flex-20">
          <img
            src={
              collection.images
                ? collection.images
                : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNH4AliDQ44gcTsmcA9ccILZ_rdjpiaBsFwQ&usqp=CAU'
            }
            className="w-16 h-12"
          />
        </div>
        <div className="break-words flex-25">{collection.title}</div>
        <div className="flex-40">
          {collection.automated.map((elm) => {
            return (
              <span>
                {elm.name}
                {elm.condition}
                {elm.value}
              </span>
            );
          })}
        </div>
      </Link>
    </div>
  );
}

export default SingleCollection;
