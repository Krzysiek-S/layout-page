import React from "react";

import { FaHome, FaCar } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import categories from "../../data/categories.json";
import { ShowMore } from "../../types/types";
import { Category } from "../../types/types";

import "./home.css";

const Home: React.FC<ShowMore> = ({ moreTiles, setMoreTiles }) => {
  console.log(moreTiles);

  return (
    <div className="content">
      <h2>Join 2 million+ Australians finding better</h2>
      <p>
        Finder's team of 40+ experts will help you find the right choices in
        over 100 categories.
      </p>
      <div className={`${moreTiles ? "showTiles" : "content__tiles"}`}>
        {categories
          .slice(0, moreTiles ? categories.length : 6)
          .map((category: Category, index: number) => (
            <a href="https://www.finder.com.au/" className="tile" key={index}>
              {index % 2 === 0 ? <FaHome size={30} /> : <FaCar size={30} />}
              <h3>{category.title}</h3>
            </a>
          ))}
      </div>
      <div className="contentButton">
        <button
          className="expandButton"
          onClick={() => {
            setMoreTiles((prev: boolean) => !prev);
          }}
        >
          <span className="toggleButtonText">
            {moreTiles ? "show less categories" : "show more categories"}
          </span>
          <span className="toggleButtonArrow">
            {moreTiles ? (
              <IoIosArrowUp size={20} />
            ) : (
              <IoIosArrowDown size={20} />
            )}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Home;
