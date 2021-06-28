import React from 'react';
import { Link } from 'react-router-dom';
import NoCollection from './NoCollection';
function CollectionMain(props) {
  return (
    <section className="flex-80 px-8 bg-gray-200">
      <header className="flex justify-between align-center py-4 w-full">
        <h1 className="font-bold text-2xl">Collections</h1>
        <nav>
          <ul className="flex items-center">
            <li className="ml-4">
              <Link
                to="/admin/products/collection/new"
                className="bg-green-500 px-4 py-2 text-white rounded inline-block	"
              >
                Add Collection
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <NoCollection />
      </main>
    </section>
  );
}

export default CollectionMain;
