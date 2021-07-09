import React from 'react';

function Collections() {
  return (
    <>
      <main id="collection">
        <section className="hero ">
          <div className="container relative flex justify-between items-center collections w-2/m mx-auto">
            <div className="flex-40 text-left">
              <h1 className="text-6xl font-bold ">New Arrivals</h1>
              <h3 className="text-gray-500 my-4 text-2xl">Get up to 20% off</h3>
              <button className="px-4 py-2 bg-red-400 text-white shadow-lg rounded hover:bg-black">
                {' '}
                SHOP NOW
              </button>
            </div>
            <div className=" width-40 font-0 absolute bottom-0 right-0">
              <img
                src="/images/collectionhero.png"
                alt="collection hero image"
                className="w-full"
              />
            </div>
          </div>
        </section>
        <section className="mb-16 py-16">
          <div className="container flex justify-between ">
            <div className="flex-20 bg-gray-200 px-4 pb-4 self-start rounded">
              <div className="mb-4">
                <h2 className="border bg-gray-200 py-2 px-4 flex items-center font-bold">
                  <i class="fas fa-sort-down mr-2"></i> PRODUCT COLLECTION
                </h2>
                <ul className="px-4 bg-white py-4">
                  <li className="border py-2">Accessories</li>
                  <li className="border py-2">Clothing</li>
                  <li className="border py-2">Coats & Jackets</li>
                  <li className="border py-2">Men</li>
                  <li className="border py-2">New In</li>
                  <li className="border py-2">Sale</li>
                  <li className="border py-2">Shoes</li>
                </ul>
              </div>
              <div className="">
                <h2 className="border bg-gray-200  px-4 flex items-center font-bold">
                  {' '}
                  <i class="fas fa-sort-down mr-2"></i>PRODUCT VENDOR
                </h2>
                <ul className="px-4 bg-white py-4">
                  <li className="border py-2">Accessories</li>
                  <li className="border py-2">Clothing</li>
                  <li className="border py-2">Coats & Jackets</li>
                  <li className="border py-2">Men</li>
                  <li className="border py-2">New In</li>
                  <li className="border py-2">Sale</li>
                  <li className="border py-2">Shoes</li>
                </ul>
              </div>
            </div>
            <div className="flex-70">
              <select
                id="cars"
                name="carlist"
                form="carform"
                className="py-2 px-4 rounded"
              >
                <option value="" className="py-2 px-4">
                  Sort By
                </option>
                <option value="High to Low Price" className="py-2 px-4">
                  High to Low Price
                </option>
                <option value="Low to High Price" className="py-2 px-4">
                  Low to High Price
                </option>
                <option value="Title A-Z" className="py-2 px-4">
                  Title A-Z
                </option>
              </select>
              <div className="grid grid-cols-3 gap-16 mt-8">
                {[
                  {
                    image: '/images/homeimg2.png',
                    title: 'ravindr adijg',
                    price: 500,
                    compairPrice: 1000,
                  },
                  {
                    image: '/images/homeimg2.png',
                    title: 'ravindr adijg',
                    price: 500,
                    compairPrice: 1000,
                  },

                  {
                    image: '/images/homeimg2.png',
                    title: 'ravindr adijg',
                    price: 500,
                    compairPrice: 1000,
                  },
                  {
                    image: '/images/laura-adai-dPy_zYLfh94-unsplash.jpg',
                    title: 'ravindr adijg',
                    price: 500,
                    compairPrice: 1000,
                  },
                ].map((elem) => {
                  return (
                    <article className="card border shadow-xl  shadow-xl rounded">
                      <div className="font-0 relative image-container">
                        <img
                          src={elem.image}
                          alt=""
                          className="img card-image "
                        />
                        <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-between">
                          <div className="" className="text-xl">
                            <p className="text-white">
                              <span className=" bg-red-500 text-white px-4 py-1 text-xs mb-1 ">
                                7%
                              </span>
                            </p>
                            <p className="text-m mt-4 ">
                              <span className=" bg-black text-white px-4 py-1 text-xs ">
                                sale
                              </span>
                            </p>
                          </div>
                          <div className="  items-center justify-center   background-transpairent py-4 setting">
                            <a href="" className="text-xl text-white mr-8">
                              <i class="fas fa-cog"></i>
                            </a>
                            <a href="" className="text-xl text-white">
                              <i class="fas fa-eye"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 text-center">
                        <h4 className="font-bold">{elem.title}</h4>
                        <div>
                          <span>{elem.price}</span>
                          <span className="line-through text-red-500 ml-2">
                            {elem.compairPrice}
                          </span>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Collections;
