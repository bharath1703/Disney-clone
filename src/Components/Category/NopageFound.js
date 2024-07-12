import React from "react";
import styled from "styled-components";
import Img from "../../../src/erorr.png";
import { Link } from "react-router-dom";
function NopageFound() {
  return (
    <div>
      <Wrap>
        <div>
          <img src={Img} alt="Erorr Image" />
        </div>
      </Wrap>
      <Content>
        <div>
          <Link to={"/"}>
            <h2>GO To Home</h2>
          </Link>
        </div>
      </Content>
    </div>
  );
}

export default NopageFound;

const Wrap = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  height: 20vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    border: 1px solid blue;
    padding: 8px;
    border-radius: 10px;
  }
  h2:hover {
    background-color: blue;
  }
`;
