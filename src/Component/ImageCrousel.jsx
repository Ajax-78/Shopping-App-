import { useEffect, useState } from "react";
import React from "react";

function ImageCrousel() {
  const url = "https://dummyjson.com/products";
  const [image, setImage] = useState([]);
  const [index, setIndex] = useState(0);

  const fetchData = async () => {
    const res = await fetch(url);
    const data = await res.json();

    const img = data.products.map((item) => {
      return item.thumbnail;
    });

    setImage(img);
  };

  useEffect(() => {
    fetchData();
  });

  useEffect(() => {
    const timer = setInterval(() => {
      handleClick("right");
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [index]);

  const handleClick = (indexName) => {
    const lastIndex = image.length - 1;
    if (indexName === "left") {
      if (index == 0) {
        setIndex(lastIndex);
      } else {
        setIndex((index) => index - 1);
      }
    } else if (indexName === "right") {
      if (lastIndex === index) {
        setIndex(0);
      } else {
        setIndex((index) => index + 1);
      }
    }
  };

  return (
    <div className="flex flex-row items-center">
      <span
        className="absolute cursor-pointer"
        onClick={() => handleClick("left")}
      >
        ⬅️
      </span>
      <img className="border " src={image[index]} alt="" />
      <span
        className="absolute right-[334px] cursor-pointer"
        onClick={() => handleClick("right")}
      >
        ➡️
      </span>
    </div>
  );
}

export default ImageCrousel;
