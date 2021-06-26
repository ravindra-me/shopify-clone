import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import { listAllProducts } from '../action/productActions';
import SingleProduct from './SingleProduct';
import EditAddAction from './EditAction';
function FilterForAll(props) {
  const [filterState, setFilter] = useState({
    filter: 'all',
    selectedAll: false,
    selectedProduct: [],
    allProducts: [],
    userInput: '',
  });
  const { location } = useHistory();
  useEffect(async () => {
    const data = await props.dispatch(listAllProducts(location.search));
    setFilter({ ...filterState, allProducts: data });
  }, [filterState.filter]);

  if (!props.products.allProducts) {
    return <h1>Loding</h1>;
  }

  return (
    <div className="rounded bg-white ">
      <div className=" border-solid">
        <div className="py-4 border-b px-4">
          <ul className="flex mr-4">
            <li className=" mr-4">
              <Link
                to="/admin/products?selectedView=all"
                className={filterState.filter === 'all' ? 'active' : ''}
                onClick={() => setFilter({ filter: 'all' })}
              >
                All
              </Link>
            </li>
            <li className=" mr-4">
              <Link
                to="/admin/products?selectedView=active&status=ACTIVE"
                className={filterState.filter === 'active' ? 'active' : ''}
                onClick={() => setFilter({ filter: 'active' })}
              >
                Active
              </Link>
            </li>
            <li className=" mr-4">
              <Link
                to="/admin/products?selectedView=draft&status=DRAFT"
                className={filterState.filter === 'draft' ? 'active' : ''}
                onClick={() => setFilter({ filter: 'draft' })}
              >
                {' '}
                Draft
              </Link>
            </li>
            <li className=" mr-4">
              <Link
                to="/admin/products?selectedView=archived&status=ARCHIVED"
                className={filterState.filter === 'archived' ? 'active' : ''}
                onClick={() => setFilter({ filter: 'archived' })}
              >
                Archived
              </Link>
            </li>
          </ul>
        </div>
        <div className="my-4 py-4 flex justify-between items-center px-4">
          <div>
            <input
              type="text"
              placeholder="Filter Products"
              className="border"
              value={filterState.userInput}
              onChange={(event) => {
                const data = filterState.allProducts;
                const userInput = event.target.value.trim();
                if (userInput.length > 0) {
                  const filterData = [...data].filter((product) => {
                    if (product.title.includes(event.target.value)) {
                      return product;
                    }
                  });
                  setFilter({
                    ...filterState,
                    allProducts: filterData,
                    userInput,
                  });
                } else {
                  setFilter({
                    ...filterState,
                    allProducts: props.products.allProducts,
                    userInput,
                  });
                }
              }}
            />
          </div>
          <table>
            <tr>
              <td>Product Vendor</td>
              <td>Tagged with</td>
              <td>Status</td>
            </tr>
          </table>
          <div>
            <p>Sort</p>
          </div>
        </div>
        {props.products.allProducts.length === 0 ? (
          <h1>No product find</h1>
        ) : (
          <div className="px-4">
            <div className="w-full ">
              <div className="mb-4">
                {filterState.selectedProduct?.length > 0 ? (
                  <EditAddAction filterState={filterState} />
                ) : (
                  <div className="grid grid-cols-7  py-4  border-b-2 text-left">
                    <div className="">
                      <input
                        type="checkbox"
                        onClick={(event) => {
                          if (event.target.checked) {
                            setFilter({
                              ...filterState,
                              selectedAll: event.target.checked,
                              selectedProduct: props.products.allProducts.map(
                                (product) => {
                                  return product.slug;
                                }
                              ),
                            });
                          } else {
                            setFilter({
                              ...filterState,
                              selectedAll: event.target.checked,
                              selectedProduct: [],
                            });
                          }
                        }}
                      />
                    </div>
                    <div className="font-bold ">images</div>
                    <div className=" font-bold">product</div>
                    <div className=" font-bold">Status</div>
                    <div className=" font-bold">inventory</div>
                    <div className=" font-bold">Type</div>
                    <div className=" font-bold">Vendor</div>
                    <div></div>
                  </div>
                )}
              </div>
              <div>
                {filterProduct(
                  props.products.allProducts,
                  filterState.userInput
                ).map((product) => (
                  <SingleProduct
                    product={product}
                    selectProduct={filterState.selectedProduct}
                    setFilter={setFilter}
                    filterState={filterState}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function filterProduct(data, userInput) {
  const result = data.filter((product) => product.title.includes(userInput));
  return userInput ? result : data;
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(FilterForAll);
