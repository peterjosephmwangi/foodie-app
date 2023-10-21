import React from "react";
import { BiSearch } from "react-icons/bi";
import Image from "@/node_modules/next/image";
import "../app/globals.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
const Search = ({ opensearch, setOpensearch }) => {
  return (
    <div className={`search-container ${opensearch ? "active" : " "} `}>
      <div className="search-box">
        <input
          type="search"
          name="search"
          aria-label="Search here"
          placeholder="Type keywords here..."
          className="search-input"
        />

        <button
          className="search-submit"
          aria-label="Submit search"
          onClick={() => setOpensearch(false)}
        >
          <BiSearch />
        </button>
      </div>

      <button
        className="search-close-btn"
        aria-label="Cancel search"
        onClick={() => setOpensearch(false)}
      >
        <AiOutlineCloseCircle />
      </button>
    </div>
  );
};

export default Search;
