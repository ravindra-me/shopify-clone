import React from 'react';
import { Link } from 'react-router-dom';
function Card(props) {
  console.log(props);
  const { images, title, compairPrice, costPerItem, slug } = props.product;
  console.log(props.product, slug);

  return (
    <Link
      className="card shadow-xl  shadow-xl rounded "
      to={`/${slug}/singleproduct`}
    >
      <div className="font-0 relative  ">
        <img
          src={
            images.length > 0
              ? images[0]
              : 'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=webp&v=1530129081'
          }
          alt=""
          className="img card-image hover:bg-gray-500"
          alt="product image"
        />
        <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-between image-container">
          <div className="text-xl">
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
        <h4 className="font-bold">{title}</h4>
        <div>
          <span>{costPerItem}</span>
          {compairPrice > 0 && (
            <span className="line-through text-red-500 ml-2">
              {compairPrice}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

export default Card;
