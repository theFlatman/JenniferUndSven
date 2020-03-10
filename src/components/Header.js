import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/imgs/logo.svg";
import styled from "styled-components";

const HeaderBox = styled.div`
  display: flex;
  flex-direction: row;
  clear: both;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
`;

const HeaderItem = styled.div`
  padding: 10px;
  height: 100%;
`;

const HeaderLogo = styled.div`
  width: 100%;
  max-width: 220px;
  height: auto;
  padding: 0px 0px 0px 10px;
  justify-content: center;
  align-items: center;
  opacity: 0.6;
  filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.4));
  transition: opacity 1s, font-weight 1s, filter 1s;
  :hover {
    opacity: 0.9;
    filter: drop-shadow(0px 0px 4px rgba(173, 73, 146, 0.8));
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 24px;
  font-family: "thebrooklynbold";
  opacity: 0.5;
  transition: font-weight 0.5s, text-shadow 0.5s;
  :hover {
    text-shadow: 0 0 5px #f5c1e7, 0 0 3px #ef94d6;
    font-weight: bold;
  }
`;

const Divider = styled.div`
  height: 20px;
  width: 3px;
  min-width: 3px;
  margin: 1px;
  background-color: #ef94d6;
`;

const Header = () => {
  return (
    <HeaderBox>
      <HeaderItem>
        <StyledLink to="/ablauf">Ablauf</StyledLink>
      </HeaderItem>
      <Divider />
      <HeaderItem>
        <StyledLink to="/trauzeugen">Trauzeugen</StyledLink>
      </HeaderItem>
      <Divider />
      <HeaderItem>
        <StyledLink to="/galerie">Galerie</StyledLink>
      </HeaderItem>
      <HeaderLogo>
        <Link to="/ablauf">
          <img src={logo} alt="Logo" width="200px" />
        </Link>
      </HeaderLogo>
      <HeaderItem>
        <StyledLink to="/informationen">Informationen</StyledLink>
      </HeaderItem>
      <Divider />
      <HeaderItem>
        <StyledLink to="/geschenke">Geschenke</StyledLink>
      </HeaderItem>
      <Divider />
      <HeaderItem>
        <StyledLink to="/anmeldung">Anmeldung</StyledLink>
      </HeaderItem>
    </HeaderBox>
  );
};

export default Header;
