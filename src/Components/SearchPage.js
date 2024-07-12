import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import movieData from "./movieData";

function SearchPage() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  // console.log(search);
  console.log(result);
  function SearchHandler() {
    {
      movieData
        .filter((item) => {
          // console.log(item);
          return search.toLocaleLowerCase() === ""
            ? null
            : item.title.toLocaleLowerCase().includes(search);
        })
        .map((item) => setResult(item));
    }
  }
  return (
    <div>
      <Navbar>
        <input
          placeholder="Search your favourite movies"
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button onClick={SearchHandler}>Search</button>
      </Navbar>
      <div>
        <Container>
          <h1>Search Results...</h1>
          <Content>
            <Wrap>
              <Link to={"/detail/" + result.id}>
                <img src={result.cardImg} alt={result.title} />
              </Link>
            </Wrap>
          </Content>
        </Container>
      </div>
    </div>
  );
}

export default SearchPage;

const Navbar = styled.div`
  padding-top: 100px;
  display: flex;
  height: 200px;
  width: 100%;
  justify-content: center;

  input {
    height: 35px;
    width: 350px;
    padding: 0px 0px 0px 5px;
    font-size: 15px;
    font-style: italic;
    border-radius: 8px;
    margin-right: 8px;
  }
  button {
    height: 35px;
    width: 100pxpx;
    padding: 0px 10px 0px 10px;
    font-size: 15px;
    font-style: italic;
    border-radius: 8px;
    cursor: pointer;
  }
  button:hover {
    background-color: blue;
    color: white;
  }
`;
const Content = styled.div`
  color: red;
`;
const Container = styled.div`
  padding-top: 0 0 26px;
  height: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Wrap = styled.div`
  // padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0/69%) 0px 26px 30px -10px,
    rgb(0 0 0/73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  // position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0;
    display: block;
    height: 300px;
    object-fit: fill;

    // position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 450px;
    z-index: 1;
    top: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0/80%) 0px 40px 58px -16px,
      rgb(0 0 0/72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
