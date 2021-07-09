import React, { useState, useEffect } from 'react';
import { listAllProducts } from '../../action/productActions';
import { connect } from 'react-redux';
import Card from './Card';
import products from '../../reducer/user';
import Loader from '../Loader';
function Home(props) {
  // useEffect(() => {}, []);
  console.log(props);
  const [products, setProducts] = useState({
    arrayOfProducts: null,
  });
  const { dispatch } = props;
  useEffect(async () => {
    const data = await dispatch(listAllProducts());
    setProducts({ ...products, arrayOfProducts: data });
  }, []);
  if (!products.arrayOfProducts) {
    return <Loader />;
  }

  const { arrayOfProducts } = products;
  const array =
    arrayOfProducts.length >= 8 ? arrayOfProducts.slice(0, 9) : arrayOfProducts;
  return (
    <main id="home">
      <section class="hero">
        <div class="container flex items-center">
          <div className="flex-30">
            <h3 className="text-xl ">FASHION GUIDE</h3>
            <h1 className="text-6xl font-bold my-4">Denim Perfect</h1>
            <p className="text-gray-500">
              Shop the latest clothing, shoes, and handbags from top fashion
              brands, style icons, and celebrities.
            </p>
            <a
              href=""
              className="bg-black py-2 px-4 text-white font-medium inline-block mt-4 rounded  hover:scale-110 transform motion-safe:hover:scale-110 sm:motion-safe:hover:animate-spin delay-75"
            >
              DISCOVER NOW
            </a>
          </div>
        </div>
      </section>
      <section className="fasion-style">
        <div class="container flex justify-between items-center">
          <div className="flex-40">
            <img src="/images/homeimg2.png" alt="" className="full-width" />
          </div>
          <div className="">
            <p className="animate__fadeInLeft text-xl font-medium">
              JACKETS & COATS
            </p>
            <h1 className="animate__fadeInRight text-5xl font-bold my-4">
              Get your Fashion style
            </h1>
            <p className="my-4">
              You’ll always be in fashion with our collection of clothing
            </p>
            <a
              href=""
              className="bg-black py-2 px-4 text-white font-medium inline-block mt-4 rounded  hover:scale-110 transform motion-safe:hover:scale-110 sm:motion-safe:hover:animate-spin delay-75"
            >
              SHOP NOW
            </a>
          </div>
        </div>
      </section>
      <section className="py-16 best-seller">
        <div class="container ">
          <div className=" text-center mb-16 ">
            <h2 className="font-bold text-4xl ">Best sellers</h2>
            <p className="mt-4 text-gray-500">Top sale in this week</p>
          </div>
          <div className="grid grid-cols-4 gap-16">
            {array.map((product) => {
              return <Card product={product} />;
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

const mapSateAndProps = (state) => state;

export default connect(mapSateAndProps)(Home);
