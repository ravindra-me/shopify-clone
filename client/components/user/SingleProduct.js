import React from 'react';

function SingleProduct(props) {
  return (
    <main className="single-product">
      <section className="global-hero">
        <article className="container flex justify-between">
          <div className="flex-50">
            <div className="font-0 py-8 primary-border shadow-xl ">
              <img
                src="https://rukminim1.flixcart.com/image/880/1056/k6l2vm80/sari/u/e/s/free-1458s150-samah-original-imafpyamcg52gh8c.jpeg?q=50"
                alt="img"
                className="imgSingle"
              />
            </div>
            <div className="flex justify-center align-center mt-8">
              <div className="flex-15 secondary-border p-2 rounded">
                <img
                  src="https://rukminim1.flixcart.com/image/880/1056/k6l2vm80/sari/u/e/s/free-1458s150-samah-original-imafpyamcg52gh8c.jpeg?q=50"
                  alt="img "
                />
              </div>
            </div>
          </div>
          <div>
            <div>
              <h4 className="text-xl font-bold">Sarr</h4>
              <h4 className="text-2xl font-normal mt-4">
                Lorem ipsum dolor sit amet consectetur.
              </h4>
              <div className="flex my-8 items-center">
                <h4 className="text-3xl font-bold">₹123</h4>
                <h5 className="mx-2 text-gray-500 line-through text-xl">500</h5>
                <p className="text-green-500 text-xl">80% off</p>
              </div>
            </div>
            <div className="mt-8">
              <button className="btn px-8 py-3 bg-gray-400 shadow rounded hover:bg-red-200">
                <i class="fas fa-shopping-cart"></i> Go To Cart
              </button>
              <button className="btn px-8 py-3 bg-gray-200 ml-8 shadow rounded hover:bg-green-400">
                <i class="fas fa-bolt"></i> Buy Now
              </button>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}

export default SingleProduct;
