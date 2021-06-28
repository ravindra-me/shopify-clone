import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { listAllProducts } from '../../action/productActions';
import FilterForAll from './FilterForAll';
function AllProducts(props) {
  return (
    <section className="flex-80 px-8 bg-gray-200 ">
      <div>
        <header className="flex justify-between align-center py-4">
          <h1 className="font-bold text-2xl">Products</h1>
          <nav>
            <ul className="flex items-center">
              <li className="ml-4">
                <a href="" className="font-semibold">
                  Export
                </a>
              </li>
              <li className="ml-4">
                <a href="" className="font-semibold">
                  Import
                </a>
              </li>
              <li className="ml-4">
                <Link
                  to="/admin/products/new"
                  className="bg-green-500 px-4 py-2 text-white rounded inline-block	"
                >
                  Add Product
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <FilterForAll />
      </div>
    </section>
  );
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(AllProducts);
