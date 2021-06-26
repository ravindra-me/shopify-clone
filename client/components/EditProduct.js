import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { editSingleProduct, updateEditProduct } from "../action/productActions";
import { useParams, Link } from "react-router-dom";
function EditProduct(props) {
  const { slug } = useParams();
  const [product, updateProduct] = useState(null);
  useEffect(async () => {
    const data = await props.dispatch(editSingleProduct(slug));
    updateProduct({ ...product, ...data });
  }, []);

  const handleChange = (event) => {
    updateProduct({ ...product, [event.target.name]: event.target.value });
  };

  const handleSubmit = async () => {
    try {
      const data = await props.dispatch(updateEditProduct(slug, product));
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
  } = product;

  return (
    <section className="w-full bg-gray-100 py-8">
      <div className="w-3/4  mx-auto  ">
        <div className="flex justify-between items-center items-center my-4">
          <div className="flex items-center">
            <Link
              to="/admin/products"
              className="px-4 py-2 bg-green-500 rounded-xl"
            >
              Back
            </Link>
            <p className="mx-4">{title}</p>
            <span className="px-2 bg-blue-500 rounded-full text-white">
              {productStatus}
            </span>
          </div>
          <div
            onClick={handleSubmit}
            className="px-4 py-2 bg-green-500 text-white font-bold"
          >
            Update
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
                <div>image</div>
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
                      <p>90%</p>
                    </div>
                    <div>
                      <p>Profit</p>
                      <p>₹1,800.00</p>
                    </div>
                  </div>
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
                  <input className="mr-4" type="checkbox" />
                  <label for="">
                    This product has multiple options, like different sizes or
                    colors
                  </label>
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
                    onChange={handleChange}
                    name="tags"
                  />
                  <div className="flex justify-between items-center mt-4">
                    {tags?.map((tag) => {
                      return (
                        <p className="px-4 py-2 bg-gray-200 rounded-2xl ">
                          {tag}{" "}
                          <span className="ml-2 cursor">
                            <i
                              class="fas fa-times"
                              onClick={() => {
                                let updateTags = tags.filter((t) => tag !== t);
                                updateProduct({
                                  ...product,
                                  tags: updateTags,
                                });
                              }}
                            ></i>
                          </span>
                        </p>
                      );
                    })}
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

export default connect(mapStateToProps)(EditProduct);
