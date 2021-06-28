import React from 'react';
import { Link } from 'react-router-dom';

function NoCollection() {
  return (
    <div className="w-2/3 bg-white mx-auto py-8 text-center rounded">
      <div>
        <img
          src="https://cdn.shopify.com/shopifycloud/web/assets/v1/315903ec8cadd07031830a71883d866d.svg"
          role="presentation"
          alt=""
          class="Polaris-EmptyState__Image_2qgms mx-auto"
        ></img>
      </div>
      <h3 className="font-bold text-2xl">
        Group your products into categories
      </h3>
      <p className="my-8 text-gray-500">
        Use collections to organize your products into <br /> categories and
        galleries for your online store.
      </p>
      <Link
        to="/admin/products/collections/new"
        className="bg-green-500 text-white font-semibold py-2 px-4 rounded"
      >
        Create collection
      </Link>
    </div>
  );
}

export default NoCollection;
