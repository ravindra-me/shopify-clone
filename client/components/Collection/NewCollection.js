import React from 'react';
import { Link } from 'react-router-dom';

function NewCollection(props) {
  return (
    <section className="flex-80 px-8 bg-gray-200">
      <header className="flex justify-between align-center py-4 w-full">
        <Link
          to="/admin/products/collection"
          className="px-4 py-1 bg-gray-300 rounded text-xl"
        >
          <i class="fas fa-arrow-left"></i>
        </Link>
        <nav>
          <ul className="flex items-center">
            <li className="ml-4">
              <Link
                to="/admin/products/new"
                className="bg-green-500 px-4 py-2 text-white rounded inline-block	"
              >
                Save
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="flex justify-between ">
          <div className="flex-50">
            <div className="bg-white p-8 rounded">
              <div>
                <label for="title" className="mb-2">
                  Title
                </label>
                <input
                  className="block border w-full p-1 mt-1"
                  type="text"
                  value=""
                  id="title"
                  name="title"
                  onChange=""
                />
                <div className="mt-8">
                  <label for="description">Description</label>
                  <textarea
                    className="block border w-full p-1 mt-1"
                    type="text"
                    value=""
                    id="description"
                    onChange=""
                    name="description"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 mt-4">
              <h4 className="font-bold mb-8">Collections type</h4>
              <div>
                <div className="mb-4">
                  <input type="radio" className="mr-4" name="collectionType" />
                  <label className="font-bold">Manual</label>
                </div>
                <p className="ml-8">
                  Add products to this collection one by one. Learn more about
                  manual collections.
                </p>
              </div>
              <div className="mt-4">
                <div className="mb-2">
                  <input type="radio" className="mr-4" name="collectionType" />
                  <label className="font-bold">Automated</label>
                </div>
                <p className="ml-8">
                  Existing and future products that match the conditions you set
                  will automatically be added to this collection. Learn more
                  about automated collections.
                </p>
              </div>
            </div>
          </div>
          <aside className="flex-30">
            <div className="bg-white p-8">
              <div className="mb-4">
                <h4 className="font-bold">Collection availability</h4>
                <p className="mt-2 text-gray-500">
                  Will be available to 1 sales channel.
                </p>
              </div>
              <div>
                <div>
                  <input type="checkbox" />
                  <label className="ml-4">Online Store</label>
                </div>
              </div>
            </div>
            <div className="mt-4 bg-white p-8">
              <h4 className="font-bold">Collection Image</h4>
              <div className="text-center my-4 border p-4 rounded bg-blue-200">
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
                  onChange=""
                ></input>
              </div>
            </div>
          </aside>
        </section>
      </main>
    </section>
  );
}

export default NewCollection;
