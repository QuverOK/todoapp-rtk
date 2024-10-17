import { FC } from "react";
import { Link } from "react-router-dom";
import BackIco from "../../../public/icons/back-icon.svg?react";
type Header = {
  className?: string;
  mainText: string;
  subText?: string;
  isHomeButton?: boolean;
};

export const Header: FC<Header> = ({
  className = "",
  mainText,
  subText = "",
  isHomeButton,
}) => (
  <div className={className}>
    <div className="container mt-[70px]">
      <h1 className="text-white text-3xl font-bold tracking-[0.38em] min-[410px]:text-4xl flex ">
        {isHomeButton && (
          <Link to="../" className="inline-flex mr-4">
            <BackIco className={"text-white size-8 "} />
          </Link>
        )}
        <span className="mr-[5px]">{mainText}</span>
        <span className="tracking-[0.15em]">{subText}</span>
      </h1>
    </div>
  </div>
);
