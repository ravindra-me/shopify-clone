import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { uploadImage } from '../../action/productActions';
import Condition from './Condition';

import { createCollection } from '../../action/collectionActions';

function NewCollection(props) {
  const [collection, setCollection] = useState({
    title: '',
    description: '',
    images: '',
    onlineStore: true,
    availableDate: new Date().toISOString(),
    manual: true,
    automated: [],
    automatedType: 'allCondition',
    allCondition: true,
    anyCondition: false,
    isAutomated: false,
  });

  const history = useHistory();

  const handleChange = async (event) => {
    if (event.target.name === 'image') {
      const imageEtentions = ['jpg', 'jpeg', 'png', 'svg'];
      if (
        event.target.files[0] &&
        imageEtentions.includes(event.target.files[0].name.split('.')[1])
      ) {
        const url = await uploadImage(event.target.files[0]);

        setCollection({ ...collection, images: url });
        return;
      } else {
        console.log(
          'this file formate is not accepted please select another image'
        );
      }
    } else {
      setCollection({ ...collection, [event.target.name]: event.target.value });
    }
  };

  const {
    title,
    description,
    images,
    onlineStore,
    availableDate,
    manual,
    automated,
    automatedType,
    isAutomated,
  } = collection;

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
              <button
                className="bg-green-500 px-4 py-2 text-white rounded inline-block	"
                onClick={() => {
                  const result = props.dispatch(
                    createCollection({
                      title,
                      description,
                      images,
                      onlineStore,
                      availableDate,
                      manual,
                      automated,
                      automatedType,
                      isAutomated,
                    })
                  );

                  if (result) {
                    history.push('/admin/products/collections');
                  }
                }}
              >
                Save
              </button>
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
            <div className="bg-white p-8 mt-4">
              <h4 className="font-bold mb-8">Collections type</h4>
              <div>
                <div className="mb-4">
                  <input
                    type="radio"
                    className="mr-4"
                    name="collectionType"
                    onChange={(event) => {
                      setCollection({ ...collection, isAutomated: false });
                    }}
                    checked={isAutomated === false ? true : false}
                  />
                  <label className="font-bold">Manual</label>
                </div>
                <p className="ml-8">
                  Add products to this collection one by one. Learn more about
                  manual collections.
                </p>
              </div>
              <div className="mt-4">
                <div className="mb-2">
                  <input
                    type="radio"
                    className="mr-4"
                    name="collectionType"
                    checked={isAutomated}
                    onChange={() =>
                      setCollection({
                        ...collection,
                        isAutomated: !isAutomated,
                        automated: automated.concat({
                          name: 'vendor',
                          condition: 'equalTo',
                          value: '',
                        }),
                      })
                    }
                  />
                  <label className="font-bold">Automated</label>
                </div>
                <p className="ml-8">
                  Existing and future products that match the conditions you set
                  will automatically be added to this collection. Learn more
                  about automated collections.
                </p>
              </div>
            </div>
            {isAutomated && (
              <Condition
                collection={collection}
                setCollection={setCollection}
              />
            )}
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
                  <input
                    type="checkbox"
                    name="onlineStore"
                    checked={onlineStore}
                    onChange={(event) => {
                      console.log(event.target.value);
                    }}
                  />
                  <label className="ml-4">Online Store</label>
                </div>
              </div>
              <div className="mt-4">
                <label className="font-bold">Select Date and Time</label>
                <input
                  type="datetime-local"
                  id="birthdaytime"
                  name="availableDate"
                  className="border w-full "
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(event) => {
                    setCollection({
                      ...collection,
                      availableDate: event.target.value,
                    });
                  }}
                />
              </div>
            </div>
            <div className="mt-4 bg-white p-8">
              <h4 className="font-bold">Collection Image</h4>
              <div className="text-center my-4 border p-4 rounded bg-blue-200">
                <label for="image">
                  <img
                    width="40"
                    src="data:image/svg+xml,%3csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M20 10a10 10 0 11-20 0 10 10 0 0120 0zM5.3 8.3l4-4a1 1 0 011.4 0l4 4a1 1 0 01-1.4 1.4L11 7.4V15a1 1 0 11-2 0V7.4L6.7 9.7a1 1 0 01-1.4-1.4z' fill='%235C5F62'/%3e%3c/svg%3e"
                    name="image"
                    className="mx-auto"
                    onChange={handleChange}
                  ></img>
                </label>
                <input
                  type="file"
                  id="image"
                  className="mt-4"
                  name="image"
                  onChange={handleChange}
                ></input>
              </div>
            </div>
          </aside>
        </section>
      </main>
    </section>
  );
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(NewCollection);
