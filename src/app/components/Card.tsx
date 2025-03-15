import React from "react";

interface CardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, value, icon, className }) => {
  return (
    <div className={`bg-gray-800 text-white p-6 rounded-2xl shadow-md flex items-center space-x-4 ${className}`}>
      {icon && <div className="text-4xl">{icon}</div>}
      <div>
        <p className="text-sm text-gray-400">{title}</p>
        <h2 className="text-2xl font-bold">{value}</h2>
      </div>
    </div>
  );
};

export default Card;
