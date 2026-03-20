import React from 'react';

const AuthLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-12 min-h-screen">
      <div className=" col-span-9  border-r-3 ">{children}</div>
      <div className="col-span-3 bg-amber-300 p-5 rounded-xl text-center font-bold text-2xl ">wellcome to Auth</div>
    </div>
  );
};

export default AuthLayout;