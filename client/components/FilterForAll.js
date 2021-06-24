import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { listAllProducts } from "../action/productActions";
import SingleProduct from "./SingleProduct";
function FilterForAll(props) {
  const [filterState, setFilter] = useState({
    filter: "all",
    selectedAll: false,
    selectedProduct: [],
  });
  const { location } = useHistory();
  useEffect(() => {
    props.dispatch(listAllProducts(location.search));
  }, [filterState]);

  console.log(props.products.allProducts);
  return (
    <div className="rounded bg-white ">
      <div className=" border-solid">
        <div className="py-4 border-b px-4">
          <ul className="flex mr-4">
            <li className=" mr-4">
              <Link
                to="/admin/products?selectedView=all"
                className={filterState.filter === "all" ? "active" : ""}
                onClick={() => setFilter({ filter: "all" })}
              >
                All
              </Link>
            </li>
            <li className=" mr-4">
              <Link
                to="/admin/products?selectedView=active&status=ACTIVE"
                className={filterState.filter === "active" ? "active" : ""}
                onClick={() => setFilter({ filter: "active" })}
              >
                Active
              </Link>
            </li>
            <li className=" mr-4">
              <Link
                to="/admin/products?selectedView=draft&status=DRAFT"
                className={filterState.filter === "draft" ? "active" : ""}
                onClick={() => setFilter({ filter: "draft" })}
              >
                {" "}
                Draft
              </Link>
            </li>
            <li className=" mr-4">
              <Link
                to="/admin/products?selectedView=archived&status=ARCHIVED"
                className={filterState.filter === "archived" ? "active" : ""}
                onClick={() => setFilter({ filter: "archived" })}
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
        <div className="px-4">
          <div className="w-full ">
            <div className="mb-4">
              {filterState.selectedProduct.length > 0 ? (
                <>
                  <span className="border">
                    {filterState.selectedProduct.length} selected
                  </span>
                </>
              ) : (
                <div className="grid grid-cols-7  py-4  border-b-2 text-left">
                  <div className="py-4">
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
                  <div className="py-4">images</div>
                  <div className="py-4">product</div>
                  <div className="py-4">Status</div>
                  <div className="py-4">inventory</div>
                  <div className="py-4">Type</div>
                  <div className="py-4">Vendor</div>
                  <div></div>
                </div>
              )}
            </div>
            <div>
              {props.products.allProducts.map((product) => (
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
      </div>
    </div>
  );
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(FilterForAll);
