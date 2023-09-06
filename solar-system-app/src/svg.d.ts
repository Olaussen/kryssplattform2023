declare module "*.svg" {
  import React from "react";
  import { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}

type Planet = {
  planetName: string;
  planetDescription: string;
  PlanetImage: React.FC<SvgProps>;
};
