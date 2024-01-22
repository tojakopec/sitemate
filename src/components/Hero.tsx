import React, { useEffect, useState } from "react";

interface HeroProps {
  title: string;
  subtitle: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle }) => {
  const [image, setImage] = useState<string>("");

  useEffect(() => {
    fetch("https://source.unsplash.com/featured/1000x500/?construction")
      .then((response) => {
        setImage(response.url);
      })
      .catch((error) => {
        console.error("Error fetching image:", error);
      });
  }, []);

  return (
    <div id="hero" className="row px-5 pt-5 pb-5 mt-0 --bs-theme-c1">
      <img
        className=" col rounded-start-pill float-end w-100 h-100"
        src={image}
        alt="Hero Image"
      />
      <div className="col">
        <h1 className="">{title}</h1>
        <h2>{subtitle}</h2>
      </div>
    </div>
  );
};

export default Hero;
