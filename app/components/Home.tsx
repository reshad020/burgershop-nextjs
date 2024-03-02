import React from "react";
import ResponsiveNav from "./navbar/ResponsiveNav";
import { Herosection } from "./hero/Herosection";

export const Home = () => {
  return (
    <div>
      <ResponsiveNav />
      <Herosection />
    </div>
  );
};
