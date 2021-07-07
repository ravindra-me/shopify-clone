import React from 'react';
import Login from './Login';
import Signup from './Signup';

function Account() {
  return (
    <>
      <main className="login">
        <section className="bg-gray-100 ">
          <div className="container flex pt-36 pb-24 justify-center items-center text-4xl font-bold">
            ACCOUNT
          </div>
        </section>
        <section className="py-16">
          <div className="container flex justify-between ">
            <Login />
            <div className="w-0.5	bg-gray-500"></div>
            <Signup />
          </div>
        </section>
      </main>
    </>
  );
}

export default Account;
