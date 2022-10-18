import React from 'react';
import Login from '../../widgets/login/Login';

const LoginWidget = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-[#3AA39F]">
      <div className="md:w-2/3 p-2">
        <Login />
      </div>
    </div>
  );
};

export default LoginWidget;
