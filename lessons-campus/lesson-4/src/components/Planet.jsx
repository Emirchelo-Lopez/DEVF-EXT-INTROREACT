import { useEffect } from "react";

const Planet = ({ name }) => {
  useEffect(() => {
    console.log(`Planet ${name}'s been found`);

    return () => {
      console.log(`Planet ${name}'s gone`);
    };
  }, [name]);

  return <div>{name}</div>;
};

export default Planet;
