import { useEffect, useState } from "react";
import "./Astros.css";

const Astro = ({ name, craft }) => {
  return (
    <div className="card flex">
      <p className="card-name">{name}</p>
      <p className="card-station">Craft: {craft}</p>
    </div>
  );
};

const Astros = () => {
  const [astros, setAstros] = useState([]);
  const hola = "hola";
  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await fetch("http://api.open-notify.org/astros.json"); //https://api.open-notify.org/astros.json
        const result = await response.json();
        console.log(result.people);
        setAstros(result.people);
      };
      fetchData();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div className="cards-container">
      {astros.map((astro, index) => {
        return <Astro key={index} {...astro} />;
      })}
    </div>
  );
};
export default Astros;
