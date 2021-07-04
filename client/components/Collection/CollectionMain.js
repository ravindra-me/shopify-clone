import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import NoCollection from './NoCollection';
import Loader from '../Loader';
import SingleCollection from './SingleCollection';
import EditActionCollection from './EditActionCollection';
import {
  createCollection,
  listCollection,
} from '../../action/collectionActions';

function CollectionMain(props) {
  const { dispatch, collection } = props;
  const [state, setState] = useState({
    filter: 'all',
    collections: null,
    slectedCollection: [],
    nocollection: false,
    selectedAll: false,
  });
  useEffect(async () => {
    const data = await dispatch(listCollection());
    console.log(data);
    if (data.length > 0) {
      setState({ ...state, collections: data, nocollection: true });
    }
  }, [state.filter]);

  if (state.collections === null) {
    return <NoCollection />;
  }

  if (!collection.allCollection) {
    return <Loader />;
  }

  const { collections, slectedCollection } = state;

  return (
    <section className="flex-80 px-8 bg-gray-200">
      <header className="flex justify-between align-center py-4 w-full">
        <h1 className="font-bold text-2xl">Collections</h1>
        <nav>
          <ul className="flex items-center">
            <li className="ml-4">
              <Link
                to="/admin/products/collections/new"
                className="bg-green-500 px-4 py-2 text-white rounded inline-block	"
              >
                Add Collection
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="rounded bg-white  ">
          <div className=" border-solid">
            <div className="py-4 border-b px-4">
              <ul className="flex mr-4 justify-between items-center">
                <li className=" mr-4">
                  <Link to="/admin/products?selectedView=all">All</Link>
                </li>
                <li>
                  <div className="relative w-full mt-2">
                    <div className="absolute top-2 left-3">
                      <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
                    </div>
                    <input
                      type="text"
                      className=" w-2/2 py-2 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none border focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                      placeholder="Filter Products"
                      value={state.userInput}
                      onChange={(event) => {
                        const data = state.collection;
                        const userInput = event.target.value.trim();
                        if (userInput.length > 0) {
                          const filterData = [...data].filter((product) => {
                            if (product.title.includes(event.target.value)) {
                              return product;
                            }
                          });
                          setState({
                            ...state,
                            collection: filterData,
                            userInput,
                          });
                        } else {
                          setState({
                            ...state,
                            collection: props.collections.collection,
                            userInput,
                          });
                        }
                      }}
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {slectedCollection.length > 0 ? (
          <EditActionCollection
            slectedCollection={slectedCollection}
            setState={setState}
            dispatch={props.dispatch}
            prevState={state}
          />
        ) : (
          <>
            <div className="px-8 flex  bg-white mt-4  py-4  border-b-2 text-left">
              <div className="flex-15">
                <input type="checkbox" />
              </div>
              <div className="font-bold flex-20">images</div>
              <div className=" font-bold flex-25">title</div>
              <div className=" font-bold flex-40">product conditions</div>
            </div>
          </>
        )}
        {collection.allCollection?.map((c) => {
          return (
            <SingleCollection
              collection={c}
              state={state}
              setState={setState}
            />
          );
        })}
      </main>
    </section>
  );
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(CollectionMain);
