
import React, { ReactNode } from "react";

interface MainLayoutProps {
  content: ReactNode;
  sidebar: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ content, sidebar }) => {
  return (
    <div className="self-center flex w-full max-w-[1375px] gap-4 mt-[30px] max-md:max-w-full">
      <div className="flex min-w-60 flex-col items-stretch grow shrink w-[963px] max-md:max-w-full">
        {content}
      </div>
      <div className="min-w-60 w-[266px] sticky top-4 self-start h-fit">
        {sidebar}
      </div>
    </div>
  );
};

export default MainLayout;