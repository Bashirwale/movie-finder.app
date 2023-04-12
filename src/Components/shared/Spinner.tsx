import {FC} from "react";
import spinner from "../assets/spinner.gif";

const Spinner : FC = () => {
  return (
    <img
      src={spinner}
      alt="Loading..." 
      className="w-24 m-auto block"
    />
  );
}

export default Spinner;
