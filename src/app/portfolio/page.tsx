import Card from "@/components/PortfolioCard";
import React from "react";

const PortfolioPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold tracking-tight leading-3 mt-40">
        PORTFOLIO
      </h1>
      <Card />
    </div>
  );
};

export default PortfolioPage;
