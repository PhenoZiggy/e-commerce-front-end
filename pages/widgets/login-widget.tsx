import React from 'react';
import Login from '../../widgets/login/Login';

const LoginWidget = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-[#3AA39F]">
      <div className="w-2/3">
        <Login />
      </div>
    </div>
  );
};

export default LoginWidget;
