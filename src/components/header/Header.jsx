import PropTypes from "prop-types"
import { BackIco } from "../../../public/home/back-ico"
import { Link } from "react-router-dom"

Header.propTypes = {
  className: PropTypes.string,
  mainText: PropTypes.string.isRequired,
  subText: PropTypes.string,
  isHomeButton: PropTypes.bool,
}

export function Header({
  className = "",
  mainText,
  subText = "",
  isHomeButton,
}) {
  return (
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
  )
}
