import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { uploadImage, addProduct } from '../../action/productActions';
import { useParams, Link } from 'react-router-dom';

import Variant from './Variant';

function AddProduct(props) {
  console.log('add product');
  const { slug } = useParams();
  const [product, updateProduct] = useState({
    title: '',
    description: '',
    images: [],
    price: 0,
    comparePrice: 0,
    costPerItem: 0,
    trackQty: true,
    outOfStock: false,
    available: 0,
    incoming: 0,
    weight: 0,
    productStatus: 'draft',
    productType: '',
    vendor: '',
    tags: [],
    optVariant: false,
    color: false,
    variant: [],
  });

  console.log(tags);

  const handleChange = async (event) => {
    console.log(event.target.name);

    if (event.target.name === 'tags') {
      if (event.target.value.includes(',') && event.charCode === 13) {
        console.log(product.tags.concat(event.target.value.split(',')));
        updateProduct({
          ...product,
          [event.target.name]: product.tags.concat(
            event.target.value.split(',')
          ),
        });
        return;
      }
      if (event.charCode === 13) {
        updateProduct({
          ...product,
          [event.target.name]: product.tags.concat(event.target.value),
        });

        return;
      } else {
        return;
      }
    }

    if (event.target.name === 'image') {
      console.log('image');
      const imageEtentions = ['jpg', 'jpeg', 'png', 'svg'];
      if (
        event.target.files[0] &&
        imageEtentions.includes(event.target.files[0].name.split('.')[1])
      ) {
        const url = await uploadImage(event.target.files[0]);
        console.log(url);
        updateProduct({ ...product, images: product.images.concat(url) });
      } else {
        console.log(
          'this file formate is not accepted please select another image'
        );
      }
    } else {
      updateProduct({ ...product, [event.target.name]: event.target.value });
    }
  };

  // https://api.cloudinary.com/v1_1/dylsn0syr ▼

  const handleSubmit = async () => {
    try {
      props.dispatch(
        addProduct({
          ...product,
          price: +product.price,
          comparePrice: +product.comparePrice,
          costPerItem: +product.costPerItem,
          variant: product.variant,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  if (!product) {
    return <h1>Loding...</h1>;
  }

  const {
    title,
    description,
    price,
    comparePrice,
    costPerItem,
    available,
    incoming,
    weight,
    vendor,
    productStatus,
    productType,
    tags,
    images,
    variant,
    optVariant,
  } = product;

  const profit = price - costPerItem;
  const margin = ((price - costPerItem) / price) * 100;

  return (
    <section className="w-full bg-gray-100 py-8">
      <div className="w-3/4  mx-auto  ">
        <div className="flex justify-between items-center items-center my-4">
          <div className="flex items-center">
            <Link
              to="/admin/products"
              className="px-4 py-1 bg-gray-300 rounded text-xl"
            >
              <i class="fas fa-arrow-left"></i>
            </Link>
          </div>
          <div
            onClick={handleSubmit}
            className="px-4 py-2 bg-green-500 text-white font-bold"
          >
            Add Product
          </div>
        </div>
        <main className="">
          <section className="flex justify-between ">
            <div className="flex-60">
              <div className="bg-white p-8 rounded">
                <div>
                  <label for="title" className="mb-2">
                    Title
                  </label>
                  <input
                    className="block border w-full p-1 mt-1"
                    type="text"
                    value={title}
                    id="title"
                    name="title"
                    onChange={handleChange}
                  />
                  <div className="mt-8">
                    <label for="description">Description</label>
                    <textarea
                      className="block border w-full p-1 mt-1"
                      type="text"
                      value={description}
                      id="description"
                      onChange={handleChange}
                      name="description"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="bg-white mt-2  p-8 rounded">
                <h4 className="font-bold">Media</h4>
                <div className="text-center border dash p-8  my-4 bg-blue-100">
                  {images.map((img) => {
                    return (
                      <div className="relative w-40">
                        <img src={img} className=" w-full" />
                        <span
                          className="absolute -top-px right-0"
                          onClick={() =>
                            updateProduct({
                              ...product,
                              images: product.images.filter(
                                (image) => image !== img
                              ),
                            })
                          }
                        >
                          <i className="fas fa-times text-2xl"></i>
                        </span>
                      </div>
                    );
                  })}
                  <label for="image">
                    <img
                      width="40"
                      src="data:image/svg+xml,%3csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M20 10a10 10 0 11-20 0 10 10 0 0120 0zM5.3 8.3l4-4a1 1 0 011.4 0l4 4a1 1 0 01-1.4 1.4L11 7.4V15a1 1 0 11-2 0V7.4L6.7 9.7a1 1 0 01-1.4-1.4z' fill='%235C5F62'/%3e%3c/svg%3e"
                      alt=""
                      className="mx-auto"
                    ></img>
                  </label>
                  <input
                    type="file"
                    id="image"
                    className="mt-4"
                    name="image"
                    onChange={handleChange}
                  ></input>
                </div>
              </div>
              <div>
                <div className="bg-white mt-2  p-8 rounded">
                  <h4 className="font-bold">Pricing</h4>
                  <div className="flex justify-between align-center mt-8 mb-4">
                    <div>
                      <label for="price">Price</label>
                      <input
                        type="number"
                        value={price}
                        className="border block  p-1"
                        name="price"
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label for="compare-price">Compare at Price</label>
                      <input
                        className="block border  p-1"
                        type="number"
                        value={comparePrice}
                        id="compare-price"
                        onChange={handleChange}
                        name="comparePrice"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-1 bg-white rounded p-8 flex justify-between">
                  <div className="">
                    <label for="cost-per-item">Cost Per Item</label>
                    <input
                      className="block border  p-1"
                      type="Number"
                      value={costPerItem}
                      onChange={handleChange}
                      name="costPerItem"
                      id="cost-per-item"
                    />
                  </div>
                  <div className="flex">
                    <div className="mx-8">
                      <p>Margin</p>
                      <p>{margin ? margin : 0}</p>
                    </div>
                    <div>
                      <p>Profit</p>
                      <p>₹{profit}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-1 bg-white rounded p-8 ">
                  <h4 className="font-bold mb-8">Inventory</h4>
                  <input
                    className="block border w-full p-1"
                    type="number"
                    value={available}
                    onChange={handleChange}
                    name="available"
                  />
                </div>
                <div className="mt-1 bg-white rounded p-8 ">
                  <h4 className="font-bold mb-8">Weight</h4>
                  <input
                    className="block border w-full p-1"
                    type="number"
                    value={weight}
                    onChange={handleChange}
                    name="weight"
                  />
                </div>
                <div className="mt-1 bg-white rounded p-8">
                  <h4 className="font-bold mb-4">Variants</h4>
                  <input
                    className="mr-4"
                    type="checkbox"
                    onChange={() => {
                      console.log('abc');
                      updateProduct({
                        ...product,
                        optVariant: !product.optVariant,
                        variant: [{ name: 'size', options: [] }],
                      });
                    }}
                    checked={optVariant}
                  />
                  <label for="">
                    This product has multiple options, like different sizes or
                    colors
                  </label>
                  {optVariant ? (
                    <Variant
                      variant={product.variant}
                      updateProduct={updateProduct}
                      product={product}
                      handleChange={handleChange}
                    />
                  ) : null}
                </div>
              </div>
            </div>
            <aside className="flex-30">
              <div className="mt-1 bg-white rounded p-8  ">
                <h4 className="font-bold mb-4">Product status</h4>
                <select
                  name="status"
                  id="status"
                  className="w-full bg-white border p-1"
                  value={productStatus}
                  onChange={handleChange}
                  name="productStatus"
                >
                  <option value="select status">select</option>
                  <option value="draft">draft</option>
                  <option value="active">active</option>
                </select>
              </div>
              <div className="mt-4 bg-white rounded p-8 ">
                <h4 className="font-bold">Insights</h4>
                <p className="text-gray-500">
                  Insights will display when the product has had recent sales
                </p>
              </div>
              <div className="mt-4 bg-white rounded p-8">
                <h4 className="font-bold">Organization</h4>
                <div className="mt-2">
                  <label for="product-type">Product Type</label>
                  <input
                    className="block border p-1 mt-1"
                    type="text"
                    id="product-type"
                    name="productType"
                    value={productType}
                    name="productType"
                    onChange={handleChange}
                  />
                </div>
                <div className="mt-2">
                  <label for="">Vendor</label>
                  <input
                    className="block border  p-1 mt-1"
                    type="text"
                    id="vendor"
                    name="vendor"
                    value={vendor}
                    onChange={handleChange}
                    name="vendor"
                  />
                </div>
                <div className="mt-2">
                  <h4 className="font-bold">Tags</h4>
                  <input
                    className="block border  p-1 mt-1"
                    type="text"
                    placeholder="vintage, cotton, summer"
                    name="tags"
                    onKeyPress={handleChange}
                  />
                  <div className="flex justify-between items-center mt-4">
                    {tags.length > 0
                      ? tags.map((tag) => {
                          return (
                            <p className="px-4 py-2 bg-gray-200 rounded-2xl ">
                              {tag}{' '}
                              <span className="ml-2 cursor">
                                <i
                                  className="fas fa-times"
                                  onClick={() => {
                                    let updateTags = tags.filter(
                                      (t) => tag !== t
                                    );
                                    updateProduct({
                                      ...product,
                                      tags: updateTags,
                                    });
                                  }}
                                ></i>
                              </span>
                            </p>
                          );
                        })
                      : ''}
                  </div>
                </div>
              </div>
            </aside>
          </section>
        </main>
      </div>
    </section>
  );
}
const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(AddProduct);
