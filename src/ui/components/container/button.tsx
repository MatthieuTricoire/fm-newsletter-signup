import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  children: React.ReactNode;
  className?: "string";
  type?: "submit" | "button";
  baseUrl?: string;
}
const Button = ({
  children,
  className,

  type,
  baseUrl,
}: ButtonProps) => {
  const buttonElement = (
    <button
      type={type}
      className={clsx(
        "bg-primary-500 w-full max-w-sm rounded-md py-4 px-3 text-white  font-bold hover:drop-shadow-app hover:bg-gradient-to-r from-secondary to-secondary-500",
        className
      )}
    >
      {children}
    </button>
  );

  if (baseUrl) {
    return <Link to={baseUrl}>{buttonElement}</Link>;
  }

  return buttonElement;
};

export default Button;
