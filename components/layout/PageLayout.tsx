import React from 'react';
import UserBoardWidget from '../user-board/UserBoard';

const PageLayout = ({ children }: any) => {
  return (
    <div className="h-screen space-y-5 flex flex-col">
      <div className="border-b-2">
        <UserBoardWidget />
      </div>
      <div className="h-fit px-10">
        <div className="w-full h-full p-5">{children}</div>
      </div>
    </div>
  );
};

export default PageLayout;
