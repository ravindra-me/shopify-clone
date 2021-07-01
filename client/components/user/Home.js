import React from 'react';

function Home() {
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
      <section className="">
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
                <article className="card shadow-xl  shadow-xl rounded">
                  <div className="font-0 relative image-container">
                    <img src={elem.image} alt="" className="img card-image " />
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
      </section>
    </main>
  );
}

export default Home;
