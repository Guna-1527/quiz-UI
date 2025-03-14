import React from "react";

interface HeaderProps {
  name: string;
}

const Header: React.FC<HeaderProps> = ({ name }) => {
  return (
    <div>
      <h1 className="text-[40px] w-[200px] flex justify-center items-center font-extrabold mb-10">
        {name}
      </h1>
    </div>
  );
};

export default Header;
