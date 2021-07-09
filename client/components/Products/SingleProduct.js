import React from 'react';
import { Link } from 'react-router-dom';
function SingleProduct(props) {
  const { product, setFilter, selectProduct, filterState } = props;
  console.log(product);
  var checked = 0;
  return (
    <div className=" py-4  border-b-2  text-left hover:bg-gray-100 px-4">
      <Link
        to={`/admin/products/${product.slug}`}
        className="grid grid-cols-7 flex items-center "
      >
        <div className="">
          <input
            type="checkbox"
            className="checked:bg-blue-600 checked:border-transparent text-xl "
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
        <div className="w-16 border">
          <img
            src={
              product.images[0]
                ? product.images[0]
                : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNH4AliDQ44gcTsmcA9ccILZ_rdjpiaBsFwQ&usqp=CAU'
            }
            className="img h-12"
          />
        </div>
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
