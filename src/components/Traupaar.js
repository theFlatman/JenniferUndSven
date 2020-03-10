import React from "react";
import portrait from "../assets/imgs/artportrait.png";
import styled from "styled-components";

const ContentBox = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 100px;
  margin-top: -50px;
`;

const Traupaar = () => {
  return (
    <ContentBox>
      <img src={portrait} alt="Traupaar" width="500px" />
    </ContentBox>
  );
};

export default Traupaar;
