import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import { listAllProducts } from '../../action/productActions';
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
                className={filterState.filter === 'all' ? 'active_status' : ''}
                onClick={() => setFilter({ filter: 'all' })}
              >
                All
              </Link>
            </li>
            <li className=" mr-4">
              <Link
                to="/admin/products?selectedView=active&status=ACTIVE"
                className={
                  filterState.filter === 'active' ? 'active_status' : ''
                }
                onClick={() => setFilter({ filter: 'active' })}
              >
                Active
              </Link>
            </li>
            <li className=" mr-4">
              <Link
                to="/admin/products?selectedView=draft&status=DRAFT"
                className={
                  filterState.filter === 'draft' ? 'active_status' : ''
                }
                onClick={() => setFilter({ filter: 'draft' })}
              >
                {' '}
                Draft
              </Link>
            </li>
            <li className=" mr-4">
              <Link
                to="/admin/products?selectedView=archived&status=ARCHIVED"
                className={
                  filterState.filter === 'archived' ? 'active_status' : ''
                }
                onClick={() => setFilter({ filter: 'archived' })}
              >
                Archived
              </Link>
            </li>
          </ul>
        </div>
        <div className="my-4 py-4 flex justify-between items-center px-4">
          <div class=" flex justify-center items-center w-2/4">
            <div class="relative w-full">
              <div class="absolute top-2 left-3">
                <i class="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
              </div>
              <input
                type="text"
                className=" w-full py-2 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none border"
                placeholder="Filter Products"
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
          </div>
          <div className="">
            <div className="rounded flex items-center">
              <div className="border-2 py-2 px-2 ml-1 rounded shadow-sm">
                Product Vendor
              </div>
              <div className="border-2 py-2 px-2 ml-1 bounded shadow-sm">
                Tagged with
              </div>
              <div className="border-2 py-2 px-2 ml-1 rounded shadow-sm">
                Status
              </div>
            </div>
          </div>
          <div className="relative">
            <p className="border shadow-lg px-4 py-2 rounded">
              <i class="fas fa-sort mr-2"></i>Sort
            </p>
            <div className="absolute width-200px sort bg-gray-100 p-2 shadow-xl hidden ">
              <div className="py-1">
                <input type="radio" id="product-Z_A" />
                <label className="ml-4" for="product-Z_A">
                  Product title A-Z
                </label>
              </div>
              <div className="py-1">
                <input type="radio" id="product-A_Z" />
                <label className="ml-4" for="product-A_Z">
                  Product title Z-A
                </label>
              </div>
              <div className="py-1">
                <input type="radio" />
                <label className="ml-4">Vendor A-Z</label>
              </div>
              <div className="py-1">
                <input type="radio" />
                <label className="ml-4">Created (newest)</label>
              </div>
              <div className="py-1">
                <input type="radio" />
                <label className="ml-4">Created (newest)</label>
              </div>
            </div>
          </div>
        </div>
        {props.products.allProducts.length === 0 ? (
          <h1>No product find</h1>
        ) : (
          <div className="">
            <div className="w-full ">
              <div className="mb-4 px-4">
                {filterState.selectedProduct?.length > 0 ? (
                  <EditAddAction
                    filterState={filterState}
                    setFilter={setFilter}
                  />
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
              <div className="">
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
