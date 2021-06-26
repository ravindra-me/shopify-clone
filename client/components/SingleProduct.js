import React from "react";
import { Link } from "react-router-dom";
function SingleProduct(props) {
  const { product, setFilter, selectProduct, filterState } = props;
  var checked = 0;
  return (
    <div className=" py-4  border-b-2  text-left">
      <Link
        to={`/admin/products/${product.slug}`}
        className="grid grid-cols-7  "
      >
        <div className="">
          <input
            type="checkbox"
            onClick={(event) => {
              event.stopPropagation();
              if (event.target.checked) {
                console.log(filterState, addSelectProduct);
                const addSelectProduct = filterState.selectedProduct.concat(
                  product.slug
                );
                setFilter({
                  ...filterState,
                  selectedProduct: addSelectProduct,
                  selectedAll: false,
                });
              } else {
                const removeSelectProduct = filterState.selectedProduct.filter(
                  (slug) => slug !== product.slug
                );
                setFilter({
                  ...filterState,
                  selectedProduct: removeSelectProduct,
                  selectedAll: false,
                });
              }
            }}
            checked={filterState.selectedProduct?.includes(product.slug)}
          />
        </div>
        <div>ravindra</div>
        <div className="break-words">{product.title}</div>
        <div>{product.productStatus}</div>
        <div>{product.available} in stock</div>
        <div>{product.productType}</div>
        <div>{product.vendor}</div>
      </Link>
    </div>
  );
}

export default SingleProduct;
