import { useContext } from "react";
import { HoroscopeContext } from "../context/HoroscopeContext";

const Detail = () => {
  const { sign } = useContext(HoroscopeContext);
  console.log(sign);
  return (
    <div className="details">
      <img src={sign.backgroundImg} alt={sign.name} />
      <h2>Current Sign Name: {sign.name} </h2>
      <h4>Element: {sign.element} </h4>
      <h4>Traits: {sign.traits} </h4>
    </div>
  );
};

export default Detail;
